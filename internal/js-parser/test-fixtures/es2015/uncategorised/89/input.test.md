# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 89`

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
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/89/input.js 1:0-4:0
	path: UIDPath<es2015/uncategorised/89/input.js>
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "encrypt"
				loc: SourceLocation es2015/uncategorised/89/input.js 1:9-1:16 (encrypt)
			}
			loc: SourceLocation es2015/uncategorised/89/input.js 1:0-1:21
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation es2015/uncategorised/89/input.js 1:19-1:21
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
				loc: SourceLocation es2015/uncategorised/89/input.js 1:16-1:18
			}
		}
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "decrypt"
				loc: SourceLocation es2015/uncategorised/89/input.js 2:6-2:13 (decrypt)
			}
			loc: SourceLocation es2015/uncategorised/89/input.js 2:0-2:16
			meta: JSClassHead {
				body: Array []
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation es2015/uncategorised/89/input.js 2:0-2:16
			}
		}
		JSExportLocalDeclaration {
			declaration: undefined
			exportKind: "value"
			loc: SourceLocation es2015/uncategorised/89/input.js 3:0-3:34
			specifiers: Array [
				JSExportLocalSpecifier {
					loc: SourceLocation es2015/uncategorised/89/input.js 3:9-3:16
					exported: JSIdentifier {
						name: "encrypt"
						loc: SourceLocation es2015/uncategorised/89/input.js 3:9-3:16 (encrypt)
					}
					local: JSReferenceIdentifier {
						name: "encrypt"
						loc: SourceLocation es2015/uncategorised/89/input.js 3:9-3:16 (encrypt)
					}
				}
				JSExportLocalSpecifier {
					loc: SourceLocation es2015/uncategorised/89/input.js 3:18-3:32
					exported: JSIdentifier {
						name: "dec"
						loc: SourceLocation es2015/uncategorised/89/input.js 3:29-3:32 (dec)
					}
					local: JSReferenceIdentifier {
						name: "decrypt"
						loc: SourceLocation es2015/uncategorised/89/input.js 3:18-3:25 (decrypt)
					}
				}
			]
		}
	]
}
```

### `diagnostics`

```

```
