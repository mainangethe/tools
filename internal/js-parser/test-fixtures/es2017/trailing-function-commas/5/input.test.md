# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > trailing-function-commas > 5`

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
	loc: SourceLocation es2017/trailing-function-commas/5/input.js 1:0-1:7
	path: UIDPath<es2017/trailing-function-commas/5/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2017/trailing-function-commas/5/input.js 1:0-1:7
			expression: JSCallExpression {
				loc: SourceLocation es2017/trailing-function-commas/5/input.js 1:0-1:6
				callee: JSReferenceIdentifier {
					name: "log"
					loc: SourceLocation es2017/trailing-function-commas/5/input.js 1:0-1:3 (log)
				}
				arguments: Array [
					JSReferenceIdentifier {
						name: "INVALID_PLACEHOLDER"
						loc: SourceLocation es2017/trailing-function-commas/5/input.js 1:4-1:5
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
				message: RAW_MARKUP {value: "Unknown start to an call expression argument"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:4
				path: UIDPath<es2017/trailing-function-commas/5/input.js>
				start: Position 1:4
			}
		}
	]
}
```

### `diagnostics`

```

 es2017/trailing-function-commas/5/input.js:1:4 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an call expression argument

    log(,);
        ^


```
