# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2019 > json-strings > directive-line-separator`

### `ast`

```javascript
JSRoot {
	body: Array []
	corrupt: false
	diagnostics: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2019/json-strings/directive-line-separator/input.js 1:0-4:0
	path: UIDPath<es2019/json-strings/directive-line-separator/input.js>
	comments: Array [
		CommentLine {
			id: "0"
			value: "     ^ That's a U+2028 LINE SEPARATOR UTF-16 char (between 'before' and 'after')"
			loc: SourceLocation es2019/json-strings/directive-line-separator/input.js 3:0-3:82
		}
	]
	directives: Array [
		JSDirective {
			value: "before\u2028after"
			loc: SourceLocation es2019/json-strings/directive-line-separator/input.js 1:0-2:15
			trailingComments: Array ["0"]
		}
	]
}
```

### `diagnostics`

```

```
