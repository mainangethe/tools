# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 317`

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
	loc: SourceLocation core/uncategorised/317/input.js 1:0-1:25
	path: UIDPath<core/uncategorised/317/input.js>
	body: Array [
		JSLabeledStatement {
			loc: SourceLocation core/uncategorised/317/input.js 1:0-1:25
			label: JSIdentifier {
				name: "foo"
				loc: SourceLocation core/uncategorised/317/input.js 1:0-1:3 (foo)
			}
			body: JSIfStatement {
				alternate: undefined
				loc: SourceLocation core/uncategorised/317/input.js 1:5-1:25
				test: JSBooleanLiteral {
					value: true
					loc: SourceLocation core/uncategorised/317/input.js 1:9-1:13
				}
				consequent: JSBreakStatement {
					loc: SourceLocation core/uncategorised/317/input.js 1:15-1:25
					label: JSIdentifier {
						name: "foo"
						loc: SourceLocation core/uncategorised/317/input.js 1:21-1:24 (foo)
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
