# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > interface > property-computed`

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
	loc: SourceLocation typescript/interface/property-computed/input.ts 1:0-5:0
	path: UIDPath<typescript/interface/property-computed/input.ts>
	syntax: Array ["ts"]
	body: Array [
		TSInterfaceDeclaration {
			id: JSBindingIdentifier {
				name: "I"
				loc: SourceLocation typescript/interface/property-computed/input.ts 1:10-1:11 (I)
			}
			extends: undefined
			typeParameters: undefined
			loc: SourceLocation typescript/interface/property-computed/input.ts 1:0-4:1
			body: TSInterfaceBody {
				loc: SourceLocation typescript/interface/property-computed/input.ts 1:12-4:1
				body: Array [
					TSPropertySignature {
						key: JSComputedPropertyKey {
							value: JSMemberExpression {
								loc: SourceLocation typescript/interface/property-computed/input.ts 2:5-2:20
								object: JSReferenceIdentifier {
									name: "Symbol"
									loc: SourceLocation typescript/interface/property-computed/input.ts 2:5-2:11 (Symbol)
								}
								property: JSStaticMemberProperty {
									value: JSIdentifier {
										name: "iterator"
										loc: SourceLocation typescript/interface/property-computed/input.ts 2:12-2:20 (iterator)
									}
									loc: SourceLocation typescript/interface/property-computed/input.ts 2:12-2:20 (iterator)
								}
							}
							loc: SourceLocation typescript/interface/property-computed/input.ts 2:4-2:21
						}
						optional: false
						readonly: false
						loc: SourceLocation typescript/interface/property-computed/input.ts 2:4-2:30
						typeAnnotation: TSNumberKeywordTypeAnnotation {loc: SourceLocation typescript/interface/property-computed/input.ts 2:23-2:29}
					}
					TSPropertySignature {
						key: JSComputedPropertyKey {
							value: JSMemberExpression {
								loc: SourceLocation typescript/interface/property-computed/input.ts 3:5-3:20
								object: JSReferenceIdentifier {
									name: "Symbol"
									loc: SourceLocation typescript/interface/property-computed/input.ts 3:5-3:11 (Symbol)
								}
								property: JSStaticMemberProperty {
									value: JSIdentifier {
										name: "iterator"
										loc: SourceLocation typescript/interface/property-computed/input.ts 3:12-3:20 (iterator)
									}
									loc: SourceLocation typescript/interface/property-computed/input.ts 3:12-3:20 (iterator)
								}
							}
							loc: SourceLocation typescript/interface/property-computed/input.ts 3:4-3:21
						}
						optional: true
						readonly: false
						loc: SourceLocation typescript/interface/property-computed/input.ts 3:4-3:31
						typeAnnotation: TSNumberKeywordTypeAnnotation {loc: SourceLocation typescript/interface/property-computed/input.ts 3:24-3:30}
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
