# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > template-literal-invalid-escapes-tagged > 32`

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
	loc: SourceLocation experimental/template-literal-invalid-escapes-tagged/32/input.js 1:0-1:34
	path: UIDPath<experimental/template-literal-invalid-escapes-tagged/32/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation experimental/template-literal-invalid-escapes-tagged/32/input.js 1:0-1:34
			expression: JSTaggedTemplateExpression {
				typeArguments: undefined
				loc: SourceLocation experimental/template-literal-invalid-escapes-tagged/32/input.js 1:0-1:34
				tag: JSReferenceIdentifier {
					name: "sampleTag"
					loc: SourceLocation experimental/template-literal-invalid-escapes-tagged/32/input.js 1:0-1:9 (sampleTag)
				}
				quasi: JSTemplateLiteral {
					loc: SourceLocation experimental/template-literal-invalid-escapes-tagged/32/input.js 1:9-1:34
					expressions: Array [
						JSNumericLiteral {
							value: 0
							format: undefined
							loc: SourceLocation experimental/template-literal-invalid-escapes-tagged/32/input.js 1:16-1:17
						}
						JSNumericLiteral {
							value: 1
							format: undefined
							loc: SourceLocation experimental/template-literal-invalid-escapes-tagged/32/input.js 1:26-1:27
						}
					]
					quasis: Array [
						JSTemplateElement {
							cooked: "left"
							raw: "left"
							tail: false
							loc: SourceLocation experimental/template-literal-invalid-escapes-tagged/32/input.js 1:10-1:14
						}
						JSTemplateElement {
							cooked: "\\u000g"
							raw: "\\u000g"
							tail: false
							loc: SourceLocation experimental/template-literal-invalid-escapes-tagged/32/input.js 1:18-1:24
						}
						JSTemplateElement {
							cooked: "right"
							raw: "right"
							tail: true
							loc: SourceLocation experimental/template-literal-invalid-escapes-tagged/32/input.js 1:28-1:33
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
