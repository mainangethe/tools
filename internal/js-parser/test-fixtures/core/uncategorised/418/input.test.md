# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 418`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/418/input.js 1:0-1:15
	path: UIDPath<core/uncategorised/418/input.js>
	body: Array [
		JSForInStatement {
			body: JSEmptyStatement {loc: SourceLocation core/uncategorised/418/input.js 1:14-1:15}
			loc: SourceLocation core/uncategorised/418/input.js 1:0-1:15
			left: JSAssignmentIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation core/uncategorised/418/input.js 1:8-1:7
			}
			right: JSObjectExpression {
				properties: Array []
				loc: SourceLocation core/uncategorised/418/input.js 1:11-1:13
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
				message: RAW_MARKUP {value: "Invalid left-hand side in for-in statement"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:7
				path: UIDPath<core/uncategorised/418/input.js>
				start: Position 1:5
			}
		}
	]
}
```

### `diagnostics`

```

 core/uncategorised/418/input.js:1:5 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid left-hand side in for-in statement

    for (+i in {});
         ^^


```
