# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > uncategorised > 46`

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
	loc: SourceLocation experimental/uncategorised/46/input.js 1:0-1:33
	path: UIDPath<experimental/uncategorised/46/input.js>
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Foo"
				loc: SourceLocation experimental/uncategorised/46/input.js 1:6-1:9 (Foo)
			}
			loc: SourceLocation experimental/uncategorised/46/input.js 1:0-1:33
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation experimental/uncategorised/46/input.js 1:0-1:33
				body: Array [
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "foo"
								loc: SourceLocation experimental/uncategorised/46/input.js 1:19-1:22 (foo)
							}
							loc: SourceLocation experimental/uncategorised/46/input.js 1:19-1:22
						}
						value: JSStringLiteral {
							value: "bar"
							loc: SourceLocation experimental/uncategorised/46/input.js 1:25-1:30
						}
						definite: undefined
						typeAnnotation: undefined
						loc: SourceLocation experimental/uncategorised/46/input.js 1:12-1:31
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: true
							typeAnnotation: undefined
							loc: SourceLocation experimental/uncategorised/46/input.js 1:12-1:22
							start: Position 1:12
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
