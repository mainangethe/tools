# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 302`

### `ast`

```javascript
JSRoot {
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/302/input.js 1:0-1:20
	path: UIDPath<core/uncategorised/302/input.js>
	comments: Array [
		CommentBlock {
			id: "0"
			value: " comment "
			loc: SourceLocation core/uncategorised/302/input.js 1:6-1:19
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation core/uncategorised/302/input.js 1:0-1:20
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation core/uncategorised/302/input.js 1:0-1:20
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							trailingComments: undefined
							loc: SourceLocation core/uncategorised/302/input.js 1:4-1:5 (x)
						}
						init: undefined
						loc: SourceLocation core/uncategorised/302/input.js 1:4-1:5
						trailingComments: Array ["0"]
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
