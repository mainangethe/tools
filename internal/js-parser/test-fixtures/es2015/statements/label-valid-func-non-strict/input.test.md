# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > statements > label-valid-func-non-strict`

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
	loc: SourceLocation es2015/statements/label-valid-func-non-strict/input.js 1:0-2:0
	path: UIDPath<es2015/statements/label-valid-func-non-strict/input.js>
	body: Array [
		JSLabeledStatement {
			loc: SourceLocation es2015/statements/label-valid-func-non-strict/input.js 1:0-1:22
			label: JSIdentifier {
				name: "foo"
				loc: SourceLocation es2015/statements/label-valid-func-non-strict/input.js 1:0-1:3 (foo)
			}
			body: JSFunctionDeclaration {
				id: JSBindingIdentifier {
					name: "bar"
					loc: SourceLocation es2015/statements/label-valid-func-non-strict/input.js 1:14-1:17 (bar)
				}
				loc: SourceLocation es2015/statements/label-valid-func-non-strict/input.js 1:5-1:22
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: SourceLocation es2015/statements/label-valid-func-non-strict/input.js 1:20-1:22
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
					loc: SourceLocation es2015/statements/label-valid-func-non-strict/input.js 1:17-1:19
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
