# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0140`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0140/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0140/input.js>
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0140/input.js 1:0-1:8
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: SourceLocation esprima/invalid-syntax/migrated_0140/input.js 1:0-1:8
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation esprima/invalid-syntax/migrated_0140/input.js 1:6-1:7 (x)
						}
						init: undefined
						loc: SourceLocation esprima/invalid-syntax/migrated_0140/input.js 1:6-1:7
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
				message: RAW_MARKUP {value: "A constant must have an initializer"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:7
				path: UIDPath<esprima/invalid-syntax/migrated_0140/input.js>
				start: Position 1:6
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0140/input.js:1:6 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ A constant must have an initializer

    const x;
          ^


```
