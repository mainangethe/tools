# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/css-parser/index.test.ts --update-snapshots` to update.

## `comment`

```javascript
CSSRoot {
	corrupt: false
	diagnostics: Array []
	integrity: undefined
	loc: SourceLocation comment/input.css 1:0-15:1
	path: RelativePath<comment/input.css>
	comments: Array [
		CommentBlock {
			id: "0"
			value: "\n * comments\n "
			loc: SourceLocation comment/input.css 1:0-3:3
		}
		CommentBlock {
			id: "1"
			value: " comment "
			loc: SourceLocation comment/input.css 6:15-6:28
		}
		CommentBlock {
			id: "2"
			value: " comment "
			loc: SourceLocation comment/input.css 10:8-10:21
		}
		CommentBlock {
			id: "3"
			value: " comment "
			loc: SourceLocation comment/input.css 13:2-13:15
		}
	]
	body: Array [
		CSSRule {
			leadingComments: Array ["0"]
			loc: SourceLocation comment/input.css 5:0-7:1
			prelude: Array [
				CSSSelector {
					leadingComments: undefined
					loc: SourceLocation comment/input.css 5:0-5:2
					patterns: Array [
						CSSTypeSelector {
							value: "a"
							leadingComments: undefined
							loc: SourceLocation comment/input.css 5:0-5:1
						}
					]
				}
			]
			block: CSSBlock {
				value: Array [
					CSSDeclaration {
						name: "color"
						value: Array [
							CSSIdentifier {
								value: "white"
								loc: SourceLocation comment/input.css 6:8-6:13
							}
						]
						important: false
						loc: SourceLocation comment/input.css 6:1-6:13
					}
				]
				startingTokenValue: "{"
				loc: SourceLocation comment/input.css 5:2-7:1
			}
		}
		CSSRule {
			loc: SourceLocation comment/input.css 9:0-11:1
			prelude: Array [
				CSSSelector {
					loc: SourceLocation comment/input.css 9:0-9:2
					patterns: Array [
						CSSTypeSelector {
							value: "a"
							loc: SourceLocation comment/input.css 9:0-9:1
						}
					]
				}
			]
			block: CSSBlock {
				value: Array [
					CSSDeclaration {
						name: "color"
						value: Array [
							CSSIdentifier {
								value: "white"
								leadingComments: Array ["2"]
								loc: SourceLocation comment/input.css 10:22-10:27
							}
						]
						important: false
						loc: SourceLocation comment/input.css 10:1-10:27
					}
				]
				startingTokenValue: "{"
				loc: SourceLocation comment/input.css 9:2-11:1
			}
		}
		CSSRule {
			loc: SourceLocation comment/input.css 13:0-15:1
			prelude: Array [
				CSSSelector {
					loc: SourceLocation comment/input.css 13:0-13:16
					patterns: Array [
						CSSTypeSelector {
							value: "a"
							loc: SourceLocation comment/input.css 13:0-13:1
						}
					]
				}
			]
			block: CSSBlock {
				value: Array [
					CSSDeclaration {
						name: "color"
						value: Array [
							CSSIdentifier {
								value: "white"
								loc: SourceLocation comment/input.css 14:8-14:13
							}
						]
						important: false
						loc: SourceLocation comment/input.css 14:1-14:13
					}
				]
				startingTokenValue: "{"
				loc: SourceLocation comment/input.css 13:16-15:1
			}
		}
	]
}
```
