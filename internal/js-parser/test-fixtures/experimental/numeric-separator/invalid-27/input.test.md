# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > numeric-separator > invalid-27`

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
	loc: SourceLocation experimental/numeric-separator/invalid-27/input.js 1:0-2:0
	path: UIDPath<experimental/numeric-separator/invalid-27/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation experimental/numeric-separator/invalid-27/input.js 1:0-1:2
			expression: JSNumericLiteral {
				value: 0
				format: "hex"
				loc: SourceLocation experimental/numeric-separator/invalid-27/input.js 1:0-1:2
			}
		}
		JSExpressionStatement {
			loc: SourceLocation experimental/numeric-separator/invalid-27/input.js 1:2-1:5
			expression: JSReferenceIdentifier {
				name: "Z_1"
				loc: SourceLocation experimental/numeric-separator/invalid-27/input.js 1:2-1:5 (Z_1)
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
				message: RAW_MARKUP {value: "Expected number in radix <emphasis>16</emphasis>"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:2
				path: UIDPath<experimental/numeric-separator/invalid-27/input.js>
				start: Position 1:2
			}
		}
	]
}
```

### `diagnostics`

```

 experimental/numeric-separator/invalid-27/input.js:1:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected number in radix 16

    0xZ_1
      ^


```
