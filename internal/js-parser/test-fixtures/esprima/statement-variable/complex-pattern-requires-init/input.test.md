# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > statement-variable > complex-pattern-requires-init`

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
	loc: SourceLocation esprima/statement-variable/complex-pattern-requires-init/input.js 1:0-2:0
	path: UIDPath<esprima/statement-variable/complex-pattern-requires-init/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Complex binding patterns require an initialization value"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:6
				path: UIDPath<esprima/statement-variable/complex-pattern-requires-init/input.js>
				start: Position 1:6
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation esprima/statement-variable/complex-pattern-requires-init/input.js 1:0-1:6
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation esprima/statement-variable/complex-pattern-requires-init/input.js 1:0-1:6
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingArrayPattern {
							elements: Array []
							rest: undefined
							loc: SourceLocation esprima/statement-variable/complex-pattern-requires-init/input.js 1:4-1:6
						}
						init: undefined
						loc: SourceLocation esprima/statement-variable/complex-pattern-requires-init/input.js 1:4-1:6
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/statement-variable/complex-pattern-requires-init/input.js:1:6 parse(js) ━━━━━━━━━━━━━━━━━━━

  ✖ Complex binding patterns require an initialization value

    var []
          ^


```
