/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
	BaseTokens,
	NodeBase,
	NumberToken,
	ParserCore,
	ParserOptions,
	StringToken,
	ValueToken,
	createParser,
} from "@internal/parser-core";
import {isEscaped} from "@internal/string-utils";
import {ZeroIndexed} from "@internal/math";
import {descriptions} from "@internal/diagnostics";

type Tokens = BaseTokens & {
	Hashes: NumberToken<"Hashes">;
	CodeBlock: ValueToken<
		"CodeBlock",
		{
			text: string;
			language: undefined | string;
		}
	>;
	TextLine: StringToken<"TextLine">;
};

type HeadingNode = NodeBase & {
	type: "Heading";
	text: string;
	level: number;
};

type CodeBlockNode = NodeBase & {
	type: "CodeBlock";
	language: undefined | string;
	text: string;
};

type TextLineNode = NodeBase & {
	type: "TextLine";
	text: string;
};

type Node = HeadingNode | CodeBlockNode | TextLineNode;

function isHash(char: string): boolean {
	return char === "#";
}

function isCodeBlockEnd(index: ZeroIndexed, input: string): boolean {
	return (
		input[index.valueOf()] === "`" &&
		!isEscaped(index, input) &&
		input[index.add(1).valueOf()] === "`" &&
		input[index.add(2).valueOf()] === "`"
	);
}

function isInCodeBlock(char: string, index: ZeroIndexed, input: string): boolean {
	return !isCodeBlockEnd(index, input);
}

function isntNewline(char: string): boolean {
	return char !== "\n";
}

function unescapeTicks(code: string): string {
	return code;
}

type SnapshotParserTypes = {
	tokens: Tokens;
	options: ParserOptions;
	state: {};
	meta: void;
};

type SnapshotParser = ParserCore<SnapshotParserTypes>;

export const snapshotParser = createParser<SnapshotParserTypes>({
	diagnosticLanguage: "markdown",
	ignoreWhitespaceTokens: true,

	tokenize(parser, index) {
		const char = parser.getInputCharOnly(index);

		switch (char) {
			case "#": {
				const [hashes] = parser.readInputFrom(index, isHash);
				const level = hashes.length;
				return parser.finishValueToken("Hashes", level, index.add(level));
			}

			case "`": {
				const nextChar = parser.getInputCharOnly(index.increment());
				const nextNextChar = parser.getInputCharOnly(index.add(2));

				if (nextChar === "`" && nextNextChar === "`") {
					let codeOffset = index.add(3);

					let language: undefined | string;
					if (parser.getInputCharOnly(codeOffset) !== "\n") {
						[language, codeOffset] = parser.readInputFrom(
							codeOffset,
							isntNewline,
						);
					}

					// Expect the first offset character to be a newline
					if (parser.getInputCharOnly(codeOffset) === "\n") {
						// Skip leading newline
						codeOffset = codeOffset.add(1);
					} else {
						throw parser.unexpected({
							description: descriptions.SNAPSHOTS.MISSING_NEWLINE_AFTER_CODE_BLOCK,
							start: parser.getPositionFromIndex(codeOffset),
						});
					}

					let [code] = parser.readInputFrom(codeOffset, isInCodeBlock);

					let end = codeOffset.add(code.length);

					if (isCodeBlockEnd(end, parser.input)) {
						// Check for trailing newline
						if (code[code.length - 1] === "\n") {
							// Trim trailing newline
							code = code.slice(0, -1);

							// Skip closing ticks
							end = end.add(3);

							return parser.finishValueToken(
								"CodeBlock",
								{
									language,
									text: unescapeTicks(code),
								},
								end,
							);
						} else {
							throw parser.unexpected({
								description: descriptions.SNAPSHOTS.MISSING_NEWLINE_BEFORE_CODE_BLOCK,
								start: parser.getPositionFromIndex(end),
							});
						}
					} else {
						throw parser.unexpected({
							description: descriptions.SNAPSHOTS.UNCLOSED_CODE_BLOCK,
							start: parser.getPositionFromIndex(end),
						});
					}
				}
			}
		}

		const [text, end] = parser.readInputFrom(index, isntNewline);
		return parser.finishValueToken("TextLine", text, end);
	},
});

export function parseSnapshot(parser: SnapshotParser): Node[] {
	const nodes: Node[] = [];

	while (!parser.matchToken("EOF")) {
		const start = parser.getPosition();
		const token = parser.getToken();

		switch (token.type) {
			case "Hashes": {
				const level = token.value;
				parser.nextToken();
				const text = parser.expectToken("TextLine").value;
				nodes.push({
					type: "Heading",
					level,
					text,
					loc: parser.finishLoc(start),
				});
				break;
			}

			case "CodeBlock": {
				nodes.push({
					type: "CodeBlock",
					...token.value,
					loc: parser.finishLoc(start),
				});
				parser.nextToken();
				break;
			}

			case "TextLine": {
				nodes.push({
					type: "TextLine",
					text: token.value,
					loc: parser.finishLoc(start),
				});
				parser.nextToken();
				break;
			}

			default:
				throw parser.unexpected();
		}
	}

	return nodes;
}
