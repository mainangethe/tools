# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 255`

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
	loc: SourceLocation core/uncategorised/255/input.js 1:0-1:33
	path: UIDPath<core/uncategorised/255/input.js>
	body: Array [
		JSLabeledStatement {
			loc: SourceLocation core/uncategorised/255/input.js 1:0-1:33
			label: JSIdentifier {
				name: "done"
				loc: SourceLocation core/uncategorised/255/input.js 1:0-1:4 (done)
			}
			body: JSWhileStatement {
				loc: SourceLocation core/uncategorised/255/input.js 1:6-1:33
				test: JSBooleanLiteral {
					value: true
					loc: SourceLocation core/uncategorised/255/input.js 1:13-1:17
				}
				body: JSBlockStatement {
					directives: Array []
					loc: SourceLocation core/uncategorised/255/input.js 1:19-1:33
					body: Array [
						JSBreakStatement {
							loc: SourceLocation core/uncategorised/255/input.js 1:21-1:31
							label: JSIdentifier {
								name: "done"
								loc: SourceLocation core/uncategorised/255/input.js 1:27-1:31 (done)
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
