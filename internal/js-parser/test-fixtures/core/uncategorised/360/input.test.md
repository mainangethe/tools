# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 360`

### `ast`

```javascript
JSRoot {
	body: Array []
	comments: Array []
	corrupt: false
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/360/input.js 1:0-1:13
	path: UIDPath<core/uncategorised/360/input.js>
	directives: Array [
		JSDirective {
			value: "Hello\nWorld"
			loc: SourceLocation core/uncategorised/360/input.js 1:0-1:13
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Unterminated string constant"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:6
				path: UIDPath<core/uncategorised/360/input.js>
				start: Position 1:6
			}
		}
	]
}
```

### `diagnostics`

```

 core/uncategorised/360/input.js:1:6 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unterminated string constant

  > 1 │ "Hello
      │       ^
    2 │ World"


```
