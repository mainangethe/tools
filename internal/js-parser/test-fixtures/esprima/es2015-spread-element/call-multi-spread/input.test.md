# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-spread-element > call-multi-spread`

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
	loc: SourceLocation esprima/es2015-spread-element/call-multi-spread/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-spread-element/call-multi-spread/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-spread-element/call-multi-spread/input.js 1:0-1:20
			expression: JSCallExpression {
				loc: SourceLocation esprima/es2015-spread-element/call-multi-spread/input.js 1:0-1:19
				callee: JSReferenceIdentifier {
					name: "f"
					loc: SourceLocation esprima/es2015-spread-element/call-multi-spread/input.js 1:0-1:1 (f)
				}
				arguments: Array [
					JSSpreadElement {
						loc: SourceLocation esprima/es2015-spread-element/call-multi-spread/input.js 1:2-1:6
						argument: JSReferenceIdentifier {
							name: "x"
							loc: SourceLocation esprima/es2015-spread-element/call-multi-spread/input.js 1:5-1:6 (x)
						}
					}
					JSSpreadElement {
						loc: SourceLocation esprima/es2015-spread-element/call-multi-spread/input.js 1:8-1:12
						argument: JSReferenceIdentifier {
							name: "y"
							loc: SourceLocation esprima/es2015-spread-element/call-multi-spread/input.js 1:11-1:12 (y)
						}
					}
					JSSpreadElement {
						loc: SourceLocation esprima/es2015-spread-element/call-multi-spread/input.js 1:14-1:18
						argument: JSReferenceIdentifier {
							name: "z"
							loc: SourceLocation esprima/es2015-spread-element/call-multi-spread/input.js 1:17-1:18 (z)
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
