# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 30`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/30/input.js 1:0-1:22
	path: UIDPath<core/uncategorised/30/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/30/input.js 1:0-1:22
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation core/uncategorised/30/input.js 1:0-1:22
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/30/input.js 1:0-1:1 (x)
				}
				right: JSObjectExpression {
					loc: SourceLocation core/uncategorised/30/input.js 1:4-1:22
					properties: Array [
						JSObjectMethod {
							kind: "get"
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "undef"
									loc: SourceLocation core/uncategorised/30/input.js 1:10-1:15 (undef)
								}
								loc: SourceLocation core/uncategorised/30/input.js 1:10-1:15
							}
							loc: SourceLocation core/uncategorised/30/input.js 1:6-1:20
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: SourceLocation core/uncategorised/30/input.js 1:18-1:20
							}
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								params: Array []
								rest: undefined
								returnType: undefined
								thisType: undefined
								typeParameters: undefined
								loc: SourceLocation core/uncategorised/30/input.js 1:15-1:17
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

```
