# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > numeric-separator > valid-13`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "experimental/numeric-separator/valid-13/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "experimental/numeric-separator/valid-13/input.js"
		end: Object {
			column: 7
			index: 7
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "experimental/numeric-separator/valid-13/input.js"
				end: Object {
					column: 7
					index: 7
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSNumericLiteral {
				value: 3
				format: "binary"
				loc: Object {
					filename: "experimental/numeric-separator/valid-13/input.js"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```