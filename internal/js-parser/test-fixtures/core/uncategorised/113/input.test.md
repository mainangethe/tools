# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 113`

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
	loc: SourceLocation core/uncategorised/113/input.js 1:0-1:15
	path: UIDPath<core/uncategorised/113/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/113/input.js 1:0-1:15
			expression: JSCallExpression {
				arguments: Array []
				loc: SourceLocation core/uncategorised/113/input.js 1:0-1:15
				callee: JSMemberExpression {
					loc: SourceLocation core/uncategorised/113/input.js 1:0-1:13
					property: JSStaticMemberProperty {
						value: JSIdentifier {
							name: "bar"
							loc: SourceLocation core/uncategorised/113/input.js 1:10-1:13 (bar)
						}
						loc: SourceLocation core/uncategorised/113/input.js 1:10-1:13 (bar)
					}
					object: JSNewExpression {
						arguments: Array []
						optional: undefined
						typeArguments: undefined
						loc: SourceLocation core/uncategorised/113/input.js 1:0-1:9
						callee: JSReferenceIdentifier {
							name: "foo"
							loc: SourceLocation core/uncategorised/113/input.js 1:4-1:7 (foo)
						}
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
