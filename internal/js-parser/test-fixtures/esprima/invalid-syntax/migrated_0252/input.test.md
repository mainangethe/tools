# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0252`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/invalid-syntax/migrated_0252/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0252/input.js>
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0252/input.js 1:0-2:0
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation esprima/invalid-syntax/migrated_0252/input.js 1:0-2:0
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: ""
							loc: SourceLocation esprima/invalid-syntax/migrated_0252/input.js 2:0-2:0 ()
						}
						init: undefined
						loc: SourceLocation esprima/invalid-syntax/migrated_0252/input.js 2:0-2:0
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
				message: RAW_MARKUP {value: "Expected an identifier"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:3
				path: UIDPath<esprima/invalid-syntax/migrated_0252/input.js>
				start: Position 2:0
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0252/input.js:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected an identifier

    var


```
