# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-yield > yield-call-expression-property`

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
	loc: SourceLocation esprima/es2015-yield/yield-call-expression-property/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-yield/yield-call-expression-property/input.js>
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "g"
				loc: SourceLocation esprima/es2015-yield/yield-call-expression-property/input.js 1:10-1:11 (g)
			}
			loc: SourceLocation esprima/es2015-yield/yield-call-expression-property/input.js 1:0-1:30
			head: JSFunctionHead {
				async: false
				generator: true
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation esprima/es2015-yield/yield-call-expression-property/input.js 1:11-1:13
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation esprima/es2015-yield/yield-call-expression-property/input.js 1:14-1:30
				body: Array [
					JSExpressionStatement {
						loc: SourceLocation esprima/es2015-yield/yield-call-expression-property/input.js 1:16-1:28
						expression: JSCallExpression {
							arguments: Array []
							loc: SourceLocation esprima/es2015-yield/yield-call-expression-property/input.js 1:16-1:27
							callee: JSMemberExpression {
								loc: SourceLocation esprima/es2015-yield/yield-call-expression-property/input.js 1:16-1:25
								object: JSReferenceIdentifier {
									name: "obj"
									loc: SourceLocation esprima/es2015-yield/yield-call-expression-property/input.js 1:16-1:19 (obj)
								}
								property: JSStaticMemberProperty {
									value: JSIdentifier {
										name: "yield"
										loc: SourceLocation esprima/es2015-yield/yield-call-expression-property/input.js 1:20-1:25 (yield)
									}
									loc: SourceLocation esprima/es2015-yield/yield-call-expression-property/input.js 1:20-1:25 (yield)
								}
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

```
