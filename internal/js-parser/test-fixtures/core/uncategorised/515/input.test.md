# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 515`

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
	loc: SourceLocation core/uncategorised/515/input.js 1:0-1:34
	path: UIDPath<core/uncategorised/515/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "eval is a reserved word"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:15
				path: UIDPath<core/uncategorised/515/input.js>
				start: Position 1:11
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "a"
				loc: SourceLocation core/uncategorised/515/input.js 1:9-1:10 (a)
			}
			loc: SourceLocation core/uncategorised/515/input.js 1:0-1:34
			body: JSBlockStatement {
				body: Array []
				loc: SourceLocation core/uncategorised/515/input.js 1:17-1:34
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: SourceLocation core/uncategorised/515/input.js 1:19-1:32
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
				loc: SourceLocation core/uncategorised/515/input.js 1:10-1:16
				params: Array [
					JSBindingIdentifier {
						name: "eval"
						loc: SourceLocation core/uncategorised/515/input.js 1:11-1:15 (eval)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation core/uncategorised/515/input.js 1:11-1:15
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

 core/uncategorised/515/input.js:1:11 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ eval is a reserved word

    function a(eval) { "use strict"; }
               ^^^^


```
