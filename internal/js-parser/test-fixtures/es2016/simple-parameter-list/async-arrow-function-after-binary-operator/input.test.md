# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2016 > simple-parameter-list > async-arrow-function-after-binary-operator`

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
	loc: SourceLocation es2016/simple-parameter-list/async-arrow-function-after-binary-operator/input.js 1:0-1:16
	path: UIDPath<es2016/simple-parameter-list/async-arrow-function-after-binary-operator/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2016/simple-parameter-list/async-arrow-function-after-binary-operator/input.js 1:0-1:16
			expression: JSBinaryExpression {
				operator: "+"
				loc: SourceLocation es2016/simple-parameter-list/async-arrow-function-after-binary-operator/input.js 1:0-1:16
				left: JSNumericLiteral {
					value: 3
					format: undefined
					loc: SourceLocation es2016/simple-parameter-list/async-arrow-function-after-binary-operator/input.js 1:0-1:1
				}
				right: JSArrowFunctionExpression {
					loc: SourceLocation es2016/simple-parameter-list/async-arrow-function-after-binary-operator/input.js 1:4-1:16
					body: JSNumericLiteral {
						value: 2
						format: undefined
						loc: SourceLocation es2016/simple-parameter-list/async-arrow-function-after-binary-operator/input.js 1:15-1:16
					}
					head: JSFunctionHead {
						async: true
						hasHoistedVars: false
						params: Array []
						rest: undefined
						returnType: undefined
						thisType: undefined
						loc: SourceLocation es2016/simple-parameter-list/async-arrow-function-after-binary-operator/input.js 1:4-1:14
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
