# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > class > static`

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
	sourceType: "module"
	loc: SourceLocation typescript/class/static/input.ts 1:0-7:0
	path: UIDPath<typescript/class/static/input.ts>
	syntax: Array ["ts"]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "C"
				loc: SourceLocation typescript/class/static/input.ts 1:6-1:7 (C)
			}
			loc: SourceLocation typescript/class/static/input.ts 1:0-6:1
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation typescript/class/static/input.ts 1:0-6:1
				body: Array [
					TSDeclareMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "f"
								loc: SourceLocation typescript/class/static/input.ts 2:11-2:12 (f)
							}
							loc: SourceLocation typescript/class/static/input.ts 2:11-2:12
						}
						body: undefined
						loc: SourceLocation typescript/class/static/input.ts 2:4-2:15
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: true
							typeAnnotation: undefined
							loc: SourceLocation typescript/class/static/input.ts 2:4-2:12
							start: Position 2:4
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
							loc: SourceLocation typescript/class/static/input.ts 2:12-2:14
						}
					}
					TSDeclareMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "f"
								loc: SourceLocation typescript/class/static/input.ts 3:18-3:19 (f)
							}
							loc: SourceLocation typescript/class/static/input.ts 3:18-3:19
						}
						body: undefined
						loc: SourceLocation typescript/class/static/input.ts 3:4-3:22
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: "public"
							optional: false
							readonly: false
							static: true
							typeAnnotation: undefined
							loc: SourceLocation typescript/class/static/input.ts 3:4-3:19
							start: Position 3:4
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
							loc: SourceLocation typescript/class/static/input.ts 3:19-3:21
						}
					}
					TSDeclareMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "f"
								loc: SourceLocation typescript/class/static/input.ts 4:21-4:22 (f)
							}
							loc: SourceLocation typescript/class/static/input.ts 4:21-4:22
						}
						body: undefined
						loc: SourceLocation typescript/class/static/input.ts 4:4-4:25
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: "protected"
							optional: false
							readonly: false
							static: true
							typeAnnotation: undefined
							loc: SourceLocation typescript/class/static/input.ts 4:4-4:22
							start: Position 4:4
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
							loc: SourceLocation typescript/class/static/input.ts 4:22-4:24
						}
					}
					TSDeclareMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "f"
								loc: SourceLocation typescript/class/static/input.ts 5:19-5:20 (f)
							}
							loc: SourceLocation typescript/class/static/input.ts 5:19-5:20
						}
						body: undefined
						loc: SourceLocation typescript/class/static/input.ts 5:4-5:23
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: "private"
							optional: false
							readonly: false
							static: true
							typeAnnotation: undefined
							loc: SourceLocation typescript/class/static/input.ts 5:4-5:20
							start: Position 5:4
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
							loc: SourceLocation typescript/class/static/input.ts 5:20-5:22
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
