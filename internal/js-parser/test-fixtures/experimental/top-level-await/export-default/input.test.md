# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > top-level-await > export-default`

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
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation experimental/top-level-await/export-default/input.js 1:0-1:23
	path: UIDPath<experimental/top-level-await/export-default/input.js>
	body: Array [
		JSExportDefaultDeclaration {
			loc: SourceLocation experimental/top-level-await/export-default/input.js 1:0-1:23
			declaration: JSAwaitExpression {
				loc: SourceLocation experimental/top-level-await/export-default/input.js 1:15-1:22
				argument: JSNumericLiteral {
					value: 0
					format: undefined
					loc: SourceLocation experimental/top-level-await/export-default/input.js 1:21-1:22
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
