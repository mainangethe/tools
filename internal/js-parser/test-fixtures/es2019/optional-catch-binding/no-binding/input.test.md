# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2019 > optional-catch-binding > no-binding`

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
	loc: SourceLocation es2019/optional-catch-binding/no-binding/input.js 1:0-7:0
	path: UIDPath<es2019/optional-catch-binding/no-binding/input.js>
	body: Array [
		JSTryStatement {
			finalizer: undefined
			loc: SourceLocation es2019/optional-catch-binding/no-binding/input.js 1:0-6:1
			block: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation es2019/optional-catch-binding/no-binding/input.js 1:4-3:1
			}
			handler: JSCatchClause {
				param: undefined
				loc: SourceLocation es2019/optional-catch-binding/no-binding/input.js 4:0-6:1
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: SourceLocation es2019/optional-catch-binding/no-binding/input.js 4:6-6:1
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
