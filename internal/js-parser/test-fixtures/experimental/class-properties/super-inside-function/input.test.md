# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-properties > super-inside-function`

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
	loc: SourceLocation experimental/class-properties/super-inside-function/input.js 1:0-6:0
	path: UIDPath<experimental/class-properties/super-inside-function/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "super is only allowed in object methods and classes"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 2:23
				path: UIDPath<experimental/class-properties/super-inside-function/input.js>
				start: Position 3:4
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: SourceLocation experimental/class-properties/super-inside-function/input.js 1:6-1:7 (A)
			}
			loc: SourceLocation experimental/class-properties/super-inside-function/input.js 1:0-5:1
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation experimental/class-properties/super-inside-function/input.js 1:0-5:1
				body: Array [
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "foo"
								loc: SourceLocation experimental/class-properties/super-inside-function/input.js 2:2-2:5 (foo)
							}
							loc: SourceLocation experimental/class-properties/super-inside-function/input.js 2:2-2:5
						}
						value: JSFunctionExpression {
							id: JSBindingIdentifier {
								name: "fn"
								loc: SourceLocation experimental/class-properties/super-inside-function/input.js 2:17-2:19 (fn)
							}
							loc: SourceLocation experimental/class-properties/super-inside-function/input.js 2:8-4:3
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								params: Array []
								rest: undefined
								returnType: undefined
								thisType: undefined
								typeParameters: undefined
								loc: SourceLocation experimental/class-properties/super-inside-function/input.js 2:19-2:21
							}
							body: JSBlockStatement {
								directives: Array []
								loc: SourceLocation experimental/class-properties/super-inside-function/input.js 2:22-4:3
								body: Array [
									JSExpressionStatement {
										loc: SourceLocation experimental/class-properties/super-inside-function/input.js 3:4-3:14
										expression: JSCallExpression {
											arguments: Array []
											loc: SourceLocation experimental/class-properties/super-inside-function/input.js 3:4-3:13
											callee: JSMemberExpression {
												loc: SourceLocation experimental/class-properties/super-inside-function/input.js 3:4-3:11
												object: JSSuper {loc: SourceLocation experimental/class-properties/super-inside-function/input.js 3:4-3:9}
												property: JSStaticMemberProperty {
													value: JSIdentifier {
														name: "x"
														loc: SourceLocation experimental/class-properties/super-inside-function/input.js 3:10-3:11 (x)
													}
													loc: SourceLocation experimental/class-properties/super-inside-function/input.js 3:10-3:11 (x)
												}
											}
										}
									}
								]
							}
						}
						definite: undefined
						typeAnnotation: undefined
						loc: SourceLocation experimental/class-properties/super-inside-function/input.js 2:2-4:3
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation experimental/class-properties/super-inside-function/input.js 2:2-2:5
							start: Position 2:2
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

 experimental/class-properties/super-inside-function/input.js:3:4 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ super is only allowed in object methods and classes

    1 │ class A {
    2 │   foo = function fn() {
    3 │     super.x();
    4 │   }


```
