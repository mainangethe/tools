# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0263`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0263/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0263/input.js>
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/invalid-syntax/migrated_0263/input.js 1:5-1:5
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0263/input.js 1:0-1:6
			meta: JSClassHead {
				body: Array []
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation esprima/invalid-syntax/migrated_0263/input.js 1:0-1:6
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
				message: RAW_MARKUP {value: "Class name is required"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:5
				path: UIDPath<esprima/invalid-syntax/migrated_0263/input.js>
				start: Position 1:5
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0263/input.js:1:5 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Class name is required

    class;
         ^


```
