# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > yield > parameter-default-inside-arrow-inside-generator-4`

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
	loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 1:0-3:1
	path: UIDPath<es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "yield is not allowed in generator parameters"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 2:22
				path: UIDPath<es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js>
				start: Position 2:22
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "fn"
				loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 1:10-1:12 (fn)
			}
			loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 1:0-3:1
			head: JSFunctionHead {
				async: false
				generator: true
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 1:12-1:14
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 1:15-3:1
				body: Array [
					JSExpressionStatement {
						loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 2:2-2:30
						expression: JSArrowFunctionExpression {
							loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 2:2-2:29
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 2:27-2:29
							}
							head: JSFunctionHead {
								async: false
								hasHoistedVars: false
								rest: undefined
								returnType: undefined
								thisType: undefined
								loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 2:2-2:26
								params: Array [
									JSBindingIdentifier {
										name: "a"
										loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 2:3-2:4 (a)
									}
									JSBindingAssignmentPattern {
										operator: "="
										loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 2:6-2:11
										left: JSBindingIdentifier {
											name: "b"
											loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 2:6-2:7 (b)
										}
										right: JSNumericLiteral {
											value: 3
											format: undefined
											loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 2:10-2:11
										}
									}
									JSBindingAssignmentPattern {
										operator: "="
										loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 2:13-2:22
										left: JSBindingIdentifier {
											name: "x"
											loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 2:13-2:14 (x)
										}
										right: JSYieldExpression {
											argument: undefined
											delegate: false
											loc: SourceLocation es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js 2:17-2:22
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

 es2015/yield/parameter-default-inside-arrow-inside-generator-4/input.js:2:22 parse(js) ━━━━━━━━━━━━

  ✖ yield is not allowed in generator parameters

    1 │ function* fn() {
  > 2 │   (a, b = 3, x = yield) => {};
      │                       ^
    3 │ }


```
