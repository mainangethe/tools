# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 340`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/340/input.js 1:0-1:19
	path: UIDPath<es2015/uncategorised/340/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:14
				path: UIDPath<es2015/uncategorised/340/input.js>
				start: Position 1:15
			}
			description: Object {
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Unexpected character <emphasis>4</emphasis>"}
				advice: Array [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Expected the opening block character <emphasis>{</emphasis>"}
					}
				]
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/340/input.js 1:0-1:19
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation es2015/uncategorised/340/input.js 1:0-1:19
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation es2015/uncategorised/340/input.js 1:0-1:1 (x)
				}
				right: JSObjectExpression {
					loc: SourceLocation es2015/uncategorised/340/input.js 1:4-1:19
					properties: Array [
						JSObjectMethod {
							kind: "method"
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "method"
									loc: SourceLocation es2015/uncategorised/340/input.js 1:6-1:12 (method)
								}
								loc: SourceLocation es2015/uncategorised/340/input.js 1:6-1:12
							}
							loc: SourceLocation es2015/uncategorised/340/input.js 1:6-1:19
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								params: Array []
								rest: undefined
								returnType: undefined
								thisType: undefined
								typeParameters: undefined
								loc: SourceLocation es2015/uncategorised/340/input.js 1:12-1:14
							}
							body: JSBlockStatement {
								directives: Array []
								loc: SourceLocation es2015/uncategorised/340/input.js 1:15-1:19
								body: Array [
									JSExpressionStatement {
										loc: SourceLocation es2015/uncategorised/340/input.js 1:15-1:17
										expression: JSNumericLiteral {
											value: 42
											format: undefined
											loc: SourceLocation es2015/uncategorised/340/input.js 1:15-1:17
										}
									}
								]
							}
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

 es2015/uncategorised/340/input.js:1:15 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character 4

    x = { method() 42 }
                   ^

  ℹ Expected the opening block character {


```
