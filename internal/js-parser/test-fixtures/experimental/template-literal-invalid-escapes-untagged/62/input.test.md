# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > template-literal-invalid-escapes-untagged > 62`

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
	loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/62/input.js 1:0-1:19
	path: UIDPath<experimental/template-literal-invalid-escapes-untagged/62/input.js>
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
				end: Position 1:2
				path: UIDPath<experimental/template-literal-invalid-escapes-untagged/62/input.js>
				start: Position 1:2
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/62/input.js 1:0-1:19
			expression: JSTemplateLiteral {
				loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/62/input.js 1:0-1:19
				expressions: Array [
					JSNumericLiteral {
						value: 0
						format: undefined
						loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/62/input.js 1:11-1:12
					}
				]
				quasis: Array [
					JSTemplateElement {
						cooked: "\\u{\\u{0}"
						raw: "\\u{\\u{0}"
						tail: false
						loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/62/input.js 1:1-1:9
					}
					JSTemplateElement {
						cooked: "right"
						raw: "right"
						tail: true
						loc: SourceLocation experimental/template-literal-invalid-escapes-untagged/62/input.js 1:13-1:18
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 experimental/template-literal-invalid-escapes-untagged/62/input.js:1:2 parse(js) ━━━━━━━━━━━━━━━━━━

  ✖ Invalid escape sequence in template

    `\u{\u{0}${0}right`
      ^


```
