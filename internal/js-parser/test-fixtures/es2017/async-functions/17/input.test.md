# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > 17`

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
	loc: SourceLocation es2017/async-functions/17/input.js 1:0-1:36
	path: UIDPath<es2017/async-functions/17/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2017/async-functions/17/input.js 1:0-1:36
			expression: JSCallExpression {
				loc: SourceLocation es2017/async-functions/17/input.js 1:0-1:36
				callee: JSReferenceIdentifier {
					name: "f"
					loc: SourceLocation es2017/async-functions/17/input.js 1:0-1:1 (f)
				}
				arguments: Array [
					JSReferenceIdentifier {
						name: "a"
						loc: SourceLocation es2017/async-functions/17/input.js 1:2-1:3 (a)
					}
					JSArrowFunctionExpression {
						loc: SourceLocation es2017/async-functions/17/input.js 1:5-1:35
						body: JSAwaitExpression {
							loc: SourceLocation es2017/async-functions/17/input.js 1:22-1:35
							argument: JSReferenceIdentifier {
								name: "promise"
								loc: SourceLocation es2017/async-functions/17/input.js 1:28-1:35 (promise)
							}
						}
						head: JSFunctionHead {
							async: true
							hasHoistedVars: false
							rest: undefined
							thisType: undefined
							loc: SourceLocation es2017/async-functions/17/input.js 1:5-1:21
							params: Array [
								JSBindingIdentifier {
									name: "promise"
									loc: SourceLocation es2017/async-functions/17/input.js 1:11-1:18 (promise)
								}
							]
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

```
