# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0240`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0240/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0240/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:15
				path: UIDPath<esprima/invalid-syntax/migrated_0240/input.js>
				start: Position 1:14
			}
			description: Object {
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Argument <emphasis>t</emphasis> name clash in strict mode"}
				advice: Array [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Defined already here"}
					}
					frame {location: SourceLocation esprima/invalid-syntax/migrated_0240/input.js 1:14-1:15 (t)}
				]
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "a"
				loc: SourceLocation esprima/invalid-syntax/migrated_0240/input.js 1:9-1:10 (a)
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0240/input.js 1:0-1:34
			body: JSBlockStatement {
				body: Array []
				loc: SourceLocation esprima/invalid-syntax/migrated_0240/input.js 1:17-1:34
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: SourceLocation esprima/invalid-syntax/migrated_0240/input.js 1:19-1:32
					}
				]
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation esprima/invalid-syntax/migrated_0240/input.js 1:10-1:16
				params: Array [
					JSBindingIdentifier {
						name: "t"
						loc: SourceLocation esprima/invalid-syntax/migrated_0240/input.js 1:11-1:12 (t)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation esprima/invalid-syntax/migrated_0240/input.js 1:11-1:12
						}
					}
					JSBindingIdentifier {
						name: "t"
						loc: SourceLocation esprima/invalid-syntax/migrated_0240/input.js 1:14-1:15 (t)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation esprima/invalid-syntax/migrated_0240/input.js 1:14-1:15
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

 esprima/invalid-syntax/migrated_0240/input.js:1:14 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Argument t name clash in strict mode

  ℹ Defined already here

    function a(t, t) { "use strict"; }
                  ^


```
