# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-arrow-function > object-binding-pattern-01`

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
	loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-arrow-function/object-binding-pattern-01/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:6
				path: UIDPath<esprima/es2015-arrow-function/object-binding-pattern-01/input.js>
				start: Position 1:5
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
			loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:0-1:19
			expression: JSSequenceExpression {
				loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:1-1:19
				expressions: Array [
					JSAssignmentExpression {
						operator: "="
						loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:1-1:7
						right: JSReferenceIdentifier {
							name: "b"
							loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:6-1:7 (b)
						}
						left: JSAssignmentObjectPattern {
							rest: undefined
							loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:1-1:5
							properties: Array [
								JSAssignmentObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "a"
											loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:2-1:3 (a)
										}
										loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:2-1:3
									}
									value: JSAssignmentIdentifier {
										name: "a"
										loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:2-1:3 (a)
									}
									loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:2-1:3
								}
								JSAssignmentObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "b"
											loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:4-1:5 (b)
										}
										loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:4-1:5
									}
									value: JSAssignmentIdentifier {
										name: "b"
										loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:4-1:5 (b)
									}
									loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:4-1:5
								}
							]
						}
					}
					JSReferenceIdentifier {
						name: "a"
						loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:8-1:9 (a)
					}
					JSArrayExpression {
						loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:12-1:15
						elements: Array [
							JSReferenceIdentifier {
								name: "a"
								loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:13-1:14 (a)
							}
						]
					}
				]
			}
		}
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:19-1:20
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:19-1:20
			}
		}
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:20-1:21
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:20-1:21
			}
		}
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:21-1:23
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:21-1:23
			}
		}
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:23-1:25
			expression: JSNumericLiteral {
				value: 0
				format: undefined
				loc: SourceLocation esprima/es2015-arrow-function/object-binding-pattern-01/input.js 1:23-1:24
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/es2015-arrow-function/object-binding-pattern-01/input.js:1:5 parse(js) ━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character =

    ({a,b=b,a:c,[a]:[d]})=>0;
         ^

  ℹ Expected character ,


```
