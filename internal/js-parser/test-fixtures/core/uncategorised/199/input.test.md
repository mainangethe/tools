# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 199`

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
	loc: SourceLocation core/uncategorised/199/input.js 1:0-1:6
	path: UIDPath<core/uncategorised/199/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/199/input.js 1:0-1:6
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation core/uncategorised/199/input.js 1:0-1:6
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/199/input.js 1:0-1:1 (x)
				}
				right: JSNumericLiteral {
					value: 42
					format: undefined
					loc: SourceLocation core/uncategorised/199/input.js 1:4-1:6
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
