# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 397`

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
	loc: SourceLocation core/uncategorised/397/input.js 1:0-1:18
	path: UIDPath<core/uncategorised/397/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Unexpected keyword <emphasis>if</emphasis>"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:13
				path: UIDPath<core/uncategorised/397/input.js>
				start: Position 1:11
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "t"
				loc: SourceLocation core/uncategorised/397/input.js 1:9-1:10 (t)
			}
			loc: SourceLocation core/uncategorised/397/input.js 1:0-1:18
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation core/uncategorised/397/input.js 1:15-1:18
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation core/uncategorised/397/input.js 1:10-1:14
				params: Array [
					JSBindingIdentifier {
						name: "if"
						loc: SourceLocation core/uncategorised/397/input.js 1:11-1:13 (if)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation core/uncategorised/397/input.js 1:11-1:13
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

 core/uncategorised/397/input.js:1:11 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected keyword if

    function t(if) { }
               ^^


```
