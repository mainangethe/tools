# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > expression-primary-literal-regular-expression > u-flag-surrogate-pair`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:0-2:0
	path: UIDPath<esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js>
	diagnostics: Array [
		Object {
			origins: Array [
				Object {category: "parse"}
				Object {category: "parse"}
			]
			description: Object {
				advice: Array []
				categoryValue: "regex"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Range values reversed. Start char code is greater than end char code"}
			}
			location: Object {
				integrity: undefined
				language: "regex"
				sourceText: undefined
				end: Position 1:29
				path: UIDPath<esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js>
				start: Position 1:16
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:0-1:41
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:0-1:41
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:4-1:5 (x)
						}
						loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:4-1:41
						init: JSRegExpLiteral {
							global: false
							insensitive: false
							multiline: false
							noDotNewline: false
							sticky: false
							unicode: true
							loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:8-1:41
							expression: JSRegExpSubExpression {
								loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:9-1:38
								body: Array [
									JSRegExpCharSet {
										invert: false
										loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:9-1:38
										body: Array [
											JSRegExpCharacter {
												value: "\ud834"
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:10-1:16
											}
											JSRegExpCharSetRange {
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:16-1:29
												end: JSRegExpCharacter {
													value: "\udf06"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:16-1:22
												}
												start: JSRegExpCharacter {
													value: "\ud834"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:23-1:29
												}
											}
											JSRegExpCharacter {
												value: "\udf08"
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:29-1:35
											}
											JSRegExpCharSetRange {
												loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:35-1:38
												end: JSRegExpCharacter {
													value: "z"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:37-1:38
												}
												start: JSRegExpCharacter {
													value: "a"
													loc: SourceLocation esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js 1:35-1:36
												}
											}
										]
									}
								]
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/expression-primary-literal-regular-expression/u-flag-surrogate-pair/input.js:1:16
parse(regex) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Range values reversed. Start char code is greater than end char code

    var x = /[\uD834\uDF06-\uD834\uDF08a-z]/u
                    ^^^^^^^^^^^^^


```
