# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > basic > 12`

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
	loc: SourceLocation jsx/basic/12/input.jsx 1:0-1:41
	path: UIDPath<jsx/basic/12/input.jsx>
	syntax: Array ["jsx"]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation jsx/basic/12/input.jsx 1:0-1:41
			expression: JSXElement {
				name: JSXIdentifier {
					name: "div"
					loc: SourceLocation jsx/basic/12/input.jsx 1:1-1:4
				}
				attributes: Array []
				selfClosing: false
				typeArguments: undefined
				loc: SourceLocation jsx/basic/12/input.jsx 1:0-1:41
				children: Array [
					JSXElement {
						name: JSXIdentifier {
							name: "br"
							loc: SourceLocation jsx/basic/12/input.jsx 1:6-1:8
						}
						attributes: Array []
						children: Array []
						selfClosing: true
						typeArguments: undefined
						loc: SourceLocation jsx/basic/12/input.jsx 1:5-1:11
					}
					JSXText {
						value: "7x invalid-js-identifier"
						loc: SourceLocation jsx/basic/12/input.jsx 1:11-1:35
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
