# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 309`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/309/input.js 1:0-1:23
	path: UIDPath<es2015/uncategorised/309/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:12
				path: UIDPath<es2015/uncategorised/309/input.js>
				start: Position 1:11
			}
			description: Object {
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Unexpected character <emphasis>=</emphasis>"}
				advice: Array [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Expected character <emphasis>,</emphasis>"}
					}
				]
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/309/input.js 1:0-1:23
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation es2015/uncategorised/309/input.js 1:0-1:23
				right: JSReferenceIdentifier {
					name: "arr"
					loc: SourceLocation es2015/uncategorised/309/input.js 1:20-1:23 (arr)
				}
				left: JSAssignmentArrayPattern {
					rest: undefined
					loc: SourceLocation es2015/uncategorised/309/input.js 1:0-1:17
					elements: Array [
						JSAssignmentIdentifier {
							name: "a"
							loc: SourceLocation es2015/uncategorised/309/input.js 1:1-1:2 (a)
						}
						JSAssignmentObjectPattern {
							rest: undefined
							loc: SourceLocation es2015/uncategorised/309/input.js 1:4-1:15
							properties: Array [
								JSAssignmentObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "b"
											loc: SourceLocation es2015/uncategorised/309/input.js 1:5-1:6 (b)
										}
										loc: SourceLocation es2015/uncategorised/309/input.js 1:5-1:6
									}
									value: JSAssignmentAssignmentPattern {
										operator: "="
										loc: SourceLocation es2015/uncategorised/309/input.js 1:8-1:14
										right: JSNumericLiteral {
											value: 1
											format: undefined
											loc: SourceLocation es2015/uncategorised/309/input.js 1:13-1:14
										}
										left: JSAssignmentObjectPattern {
											rest: undefined
											loc: SourceLocation es2015/uncategorised/309/input.js 1:8-1:10
											properties: Array [
												JSAssignmentObjectPatternProperty {
													key: JSStaticPropertyKey {
														value: JSIdentifier {
															name: "c"
															loc: SourceLocation es2015/uncategorised/309/input.js 1:9-1:10 (c)
														}
														loc: SourceLocation es2015/uncategorised/309/input.js 1:9-1:10
													}
													value: JSAssignmentIdentifier {
														name: "c"
														loc: SourceLocation es2015/uncategorised/309/input.js 1:9-1:10 (c)
													}
													loc: SourceLocation es2015/uncategorised/309/input.js 1:9-1:10
												}
											]
										}
									}
									loc: SourceLocation es2015/uncategorised/309/input.js 1:5-1:14
								}
							]
						}
						JSAssignmentIdentifier {
							name: "INVALID_PLACEHOLDER"
							loc: SourceLocation es2015/uncategorised/309/input.js 1:15-1:16
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/309/input.js:1:11 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character =

    [a, {b: {c = 1}}] = arr
               ^

  ℹ Expected character ,


```
