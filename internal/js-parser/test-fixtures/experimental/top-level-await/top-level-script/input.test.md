# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > top-level-await > top-level-script`

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
	loc: SourceLocation experimental/top-level-await/top-level-script/input.js 1:0-1:8
	path: UIDPath<experimental/top-level-await/top-level-script/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation experimental/top-level-await/top-level-script/input.js 1:0-1:5
			expression: JSReferenceIdentifier {
				name: "await"
				loc: SourceLocation experimental/top-level-await/top-level-script/input.js 1:0-1:5 (await)
			}
		}
		JSExpressionStatement {
			loc: SourceLocation experimental/top-level-await/top-level-script/input.js 1:6-1:8
			expression: JSNumericLiteral {
				value: 0
				format: undefined
				loc: SourceLocation experimental/top-level-await/top-level-script/input.js 1:6-1:7
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
				message: RAW_MARKUP {value: "Expected a semicolon or a line terminator"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:5
				path: UIDPath<experimental/top-level-await/top-level-script/input.js>
				start: Position 1:6
			}
		}
	]
}
```

### `diagnostics`

```

 experimental/top-level-await/top-level-script/input.js:1:6 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    await 0;
          ^


```
