# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 25`

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
	loc: SourceLocation es2015/uncategorised/25/input.js 1:0-1:11
	path: UIDPath<es2015/uncategorised/25/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/25/input.js 1:0-1:11
			expression: JSNewExpression {
				arguments: Array []
				optional: undefined
				typeArguments: undefined
				loc: SourceLocation es2015/uncategorised/25/input.js 1:0-1:11
				callee: JSTaggedTemplateExpression {
					typeArguments: undefined
					loc: SourceLocation es2015/uncategorised/25/input.js 1:4-1:11
					tag: JSReferenceIdentifier {
						name: "raw"
						loc: SourceLocation es2015/uncategorised/25/input.js 1:4-1:7 (raw)
					}
					quasi: JSTemplateLiteral {
						expressions: Array []
						loc: SourceLocation es2015/uncategorised/25/input.js 1:7-1:11
						quasis: Array [
							JSTemplateElement {
								cooked: "42"
								raw: "42"
								tail: true
								loc: SourceLocation es2015/uncategorised/25/input.js 1:8-1:10
							}
						]
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
