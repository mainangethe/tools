# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 190`

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
	loc: SourceLocation core/uncategorised/190/input.js 1:0-1:9
	path: UIDPath<core/uncategorised/190/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/190/input.js 1:0-1:9
			expression: JSBinaryExpression {
				operator: "|"
				loc: SourceLocation core/uncategorised/190/input.js 1:0-1:9
				left: JSReferenceIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/190/input.js 1:0-1:1 (x)
				}
				right: JSBinaryExpression {
					operator: "&"
					loc: SourceLocation core/uncategorised/190/input.js 1:4-1:9
					left: JSReferenceIdentifier {
						name: "y"
						loc: SourceLocation core/uncategorised/190/input.js 1:4-1:5 (y)
					}
					right: JSReferenceIdentifier {
						name: "z"
						loc: SourceLocation core/uncategorised/190/input.js 1:8-1:9 (z)
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
