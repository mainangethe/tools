# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > template-literal-invalid-escapes-untagged > 29`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/29/input.js 1:0-1:8
	path: UIDPath<experimental/template-literal-invalid-escapes-untagged/29/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/29/input.js 1:0-1:8
			expression: JSTemplateLiteral {
				expressions: Array []
				loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/29/input.js 1:0-1:8
				quasis: Array [
					JSTemplateElement {
						cooked: "\\u000g"
						raw: "\\u000g"
						tail: true
						loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/29/input.js 1:1-1:7
					}
				]
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Invalid escape sequence in template"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:5
				path: UIDPath<experimental/template-literal-invalid-escapes-untagged/29/input.js>
				start: Position 1:5
			}
		}
	]
}
```

### `diagnostics`

```

 experimental/template-literal-invalid-escapes-untagged/29/input.js:1:5 parse(js) ━━━━━━━━━━━━━━━━━━

  ✖ Invalid escape sequence in template

    `\u000g`
         ^


```
