# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0124`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0124/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0124/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:15
				path: UIDPath<esprima/invalid-syntax/migrated_0124/input.js>
				start: Position 1:14
			}
			description: Object {
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Unexpected character <emphasis>)</emphasis>"}
				advice: Array [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Expected character <emphasis>;</emphasis>"}
					}
				]
			}
		}
	]
	body: Array [
		JSForStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0124/input.js 1:0-2:0
			test: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/invalid-syntax/migrated_0124/input.js 1:14-1:15
			}
			update: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/invalid-syntax/migrated_0124/input.js 2:0-2:0
			}
			body: JSExpressionStatement {
				loc: SourceLocation esprima/invalid-syntax/migrated_0124/input.js 2:0-2:0
				expression: JSReferenceIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: SourceLocation esprima/invalid-syntax/migrated_0124/input.js 2:0-2:0
				}
			}
			init: JSBinaryExpression {
				operator: "in"
				loc: SourceLocation esprima/invalid-syntax/migrated_0124/input.js 1:6-1:13
				left: JSReferenceIdentifier {
					name: "i"
					loc: SourceLocation esprima/invalid-syntax/migrated_0124/input.js 1:6-1:7 (i)
				}
				right: JSObjectExpression {
					properties: Array []
					loc: SourceLocation esprima/invalid-syntax/migrated_0124/input.js 1:11-1:13
				}
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0124/input.js:1:14 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character )

    for ((i in {}));
                  ^

  ℹ Expected character ;


```
