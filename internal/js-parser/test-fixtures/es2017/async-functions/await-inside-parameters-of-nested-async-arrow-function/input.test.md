# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > await-inside-parameters-of-nested-async-arrow-function`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 1:0-3:1
	path: UIDPath<es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "await is not allowed in async function parameters"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 2:18
				path: UIDPath<es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js>
				start: Position 2:18
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "fn"
				loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 1:15-1:17 (fn)
			}
			loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 1:0-3:1
			head: JSFunctionHead {
				async: true
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 1:17-1:19
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 1:20-3:1
				body: Array [
					JSExpressionStatement {
						loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 2:2-2:28
						expression: JSArrowFunctionExpression {
							loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 2:2-2:27
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 2:25-2:27
							}
							head: JSFunctionHead {
								async: true
								hasHoistedVars: false
								rest: undefined
								returnType: undefined
								thisType: undefined
								loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 2:2-2:24
								params: Array [
									JSBindingAssignmentPattern {
										operator: "="
										loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 2:9-2:20
										left: JSBindingIdentifier {
											name: "x"
											loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 2:9-2:10 (x)
										}
										right: JSAwaitExpression {
											loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 2:13-2:20
											argument: JSNumericLiteral {
												value: 2
												format: undefined
												loc: SourceLocation es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js 2:19-2:20
											}
										}
									}
								]
							}
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

 es2017/async-functions/await-inside-parameters-of-nested-async-arrow-function/input.js:2:18
parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ await is not allowed in async function parameters

    1 │ async function fn() {
  > 2 │   async (x = await 2) => {};
      │                   ^
    3 │ }


```
