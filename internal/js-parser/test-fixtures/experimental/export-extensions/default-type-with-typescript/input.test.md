# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > export-extensions > default-type-with-typescript`

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
	loc: SourceLocation experimental/export-extensions/default-type-with-typescript/input.js 1:0-2:0
	path: UIDPath<experimental/export-extensions/default-type-with-typescript/input.js>
	body: Array [
		JSExportExternalDeclaration {
			exportKind: undefined
			namedSpecifiers: Array []
			namespaceSpecifier: undefined
			loc: SourceLocation experimental/export-extensions/default-type-with-typescript/input.js 1:0-1:24
			source: JSStringLiteral {
				value: "test"
				loc: SourceLocation experimental/export-extensions/default-type-with-typescript/input.js 1:17-1:23
			}
			defaultSpecifier: JSExportDefaultSpecifier {
				loc: SourceLocation experimental/export-extensions/default-type-with-typescript/input.js 1:7-1:11
				exported: JSIdentifier {
					name: "type"
					loc: SourceLocation experimental/export-extensions/default-type-with-typescript/input.js 1:7-1:11 (type)
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
