# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-arrow-function > migrated_0020`

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
	loc: SourceLocation esprima/es2015-arrow-function/migrated_0020/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-arrow-function/migrated_0020/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-arrow-function/migrated_0020/input.js 1:0-1:14
			expression: JSArrowFunctionExpression {
				loc: SourceLocation esprima/es2015-arrow-function/migrated_0020/input.js 1:0-1:14
				body: JSReferenceIdentifier {
					name: "earth"
					loc: SourceLocation esprima/es2015-arrow-function/migrated_0020/input.js 1:9-1:14 (earth)
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: SourceLocation esprima/es2015-arrow-function/migrated_0020/input.js 1:0-1:8
					params: Array [
						JSBindingIdentifier {
							name: "sun"
							loc: SourceLocation esprima/es2015-arrow-function/migrated_0020/input.js 1:1-1:4 (sun)
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
