# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-properties > await-in-async-in-class-property`

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
	loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 1:0-4:0
	path: UIDPath<experimental/class-properties/await-in-async-in-class-property/input.js>
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "C"
				loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 1:6-1:7 (C)
			}
			loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 1:0-3:1
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 1:0-3:1
				body: Array [
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "p"
								loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 2:2-2:3 (p)
							}
							loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 2:2-2:3
						}
						value: JSArrowFunctionExpression {
							loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 2:6-2:28
							head: JSFunctionHead {
								async: true
								hasHoistedVars: false
								params: Array []
								rest: undefined
								returnType: undefined
								thisType: undefined
								loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 2:6-2:17
							}
							body: JSAwaitExpression {
								loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 2:18-2:28
								argument: JSUnaryExpression {
									operator: "+"
									prefix: true
									loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 2:24-2:28
									argument: JSNumericLiteral {
										value: 42
										format: undefined
										loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 2:26-2:28
									}
								}
							}
						}
						definite: undefined
						typeAnnotation: undefined
						loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 2:2-2:29
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation experimental/class-properties/await-in-async-in-class-property/input.js 2:2-2:3
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

```
