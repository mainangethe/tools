# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0054`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0054/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0054/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0054/input.js 1:0-1:3
			expression: JSUpdateExpression {
				operator: "++"
				prefix: true
				loc: SourceLocation esprima/invalid-syntax/migrated_0054/input.js 1:0-1:3
				argument: JSNumericLiteral {
					value: 1
					format: undefined
					loc: SourceLocation esprima/invalid-syntax/migrated_0054/input.js 1:2-1:3
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
