# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 309`

### `ast`

```javascript
JSRoot {
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/309/input.js 1:0-2:18
	path: UIDPath<core/uncategorised/309/input.js>
	comments: Array [
		CommentBlock {
			id: "0"
			value: " Multiline\nComment "
			loc: SourceLocation core/uncategorised/309/input.js 1:21-2:10
		}
	]
	body: Array [
		JSWhileStatement {
			loc: SourceLocation core/uncategorised/309/input.js 1:0-2:18
			test: JSBooleanLiteral {
				value: true
				loc: SourceLocation core/uncategorised/309/input.js 1:7-1:11
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation core/uncategorised/309/input.js 1:13-2:18
				body: Array [
					JSBreakStatement {
						label: undefined
						loc: SourceLocation core/uncategorised/309/input.js 1:15-1:20
						trailingComments: Array ["0"]
					}
					JSExpressionStatement {
						leadingComments: Array ["0"]
						loc: SourceLocation core/uncategorised/309/input.js 2:10-2:16
						expression: JSReferenceIdentifier {
							name: "there"
							leadingComments: undefined
							loc: SourceLocation core/uncategorised/309/input.js 2:10-2:15 (there)
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
