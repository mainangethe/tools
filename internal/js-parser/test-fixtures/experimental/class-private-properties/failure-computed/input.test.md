# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-private-properties > failure-computed`

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
	loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 1:0-5:0
	path: UIDPath<experimental/class-private-properties/failure-computed/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Expected an identifier"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 3:3
				path: UIDPath<experimental/class-private-properties/failure-computed/input.js>
				start: Position 3:3
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Foo"
				loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 1:6-1:9 (Foo)
			}
			loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 1:0-4:1
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 1:0-4:1
				body: Array [
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "p"
								loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 2:3-2:4 (p)
							}
							loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 2:2-2:4
						}
						value: JSReferenceIdentifier {
							name: "x"
							loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 2:7-2:8 (x)
						}
						typeAnnotation: undefined
						loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 2:2-2:8
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 2:2-2:4
							start: Position 2:2
						}
					}
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: ""
								loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 3:5-3:6 ()
							}
							loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 3:5-3:6
						}
						value: JSNumericLiteral {
							value: 1
							format: undefined
							loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 3:9-3:10
						}
						definite: undefined
						typeAnnotation: undefined
						loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 3:5-3:10
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation experimental/class-private-properties/failure-computed/input.js 3:5-3:6
							start: Position 3:5
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

 experimental/class-private-properties/failure-computed/input.js:3:3 parse(js) ━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected an identifier

    1 │ class Foo {
    2 │   #p = x
  > 3 │   #[m] = 1
      │    ^
    4 │ }


```
