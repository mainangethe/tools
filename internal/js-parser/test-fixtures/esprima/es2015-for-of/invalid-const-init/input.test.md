# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-for-of > invalid-const-init`

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
	loc: SourceLocation esprima/es2015-for-of/invalid-const-init/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-for-of/invalid-const-init/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Loop variable declaration may not have an initializer"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:16
				path: UIDPath<esprima/es2015-for-of/invalid-const-init/input.js>
				start: Position 1:5
			}
		}
	]
	body: Array [
		JSForOfStatement {
			await: false
			body: JSEmptyStatement {loc: SourceLocation esprima/es2015-for-of/invalid-const-init/input.js 1:22-1:23}
			loc: SourceLocation esprima/es2015-for-of/invalid-const-init/input.js 1:0-1:23
			right: JSReferenceIdentifier {
				name: "y"
				loc: SourceLocation esprima/es2015-for-of/invalid-const-init/input.js 1:20-1:21 (y)
			}
			left: JSVariableDeclaration {
				kind: "const"
				loc: SourceLocation esprima/es2015-for-of/invalid-const-init/input.js 1:5-1:16
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation esprima/es2015-for-of/invalid-const-init/input.js 1:11-1:12 (x)
						}
						loc: SourceLocation esprima/es2015-for-of/invalid-const-init/input.js 1:11-1:16
						init: JSNumericLiteral {
							value: 1
							format: undefined
							loc: SourceLocation esprima/es2015-for-of/invalid-const-init/input.js 1:15-1:16
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/es2015-for-of/invalid-const-init/input.js:1:5 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Loop variable declaration may not have an initializer

    for (const x = 1 of y);
         ^^^^^^^^^^^


```
