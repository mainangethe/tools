# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0119`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0119/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0119/input.js>
	body: Array [
		JSContinueStatement {
			label: undefined
			loc: SourceLocation esprima/invalid-syntax/migrated_0119/input.js 1:0-1:8
		}
		JSExpressionStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0119/input.js 1:9-1:11
			expression: JSNumericLiteral {
				value: 2
				format: undefined
				loc: SourceLocation esprima/invalid-syntax/migrated_0119/input.js 1:9-1:10
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
				message: RAW_MARKUP {value: "Unexpected character <emphasis>2</emphasis>"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:10
				path: UIDPath<esprima/invalid-syntax/migrated_0119/input.js>
				start: Position 1:9
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0119/input.js:1:9 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character 2

    continue 2;
             ^


```
