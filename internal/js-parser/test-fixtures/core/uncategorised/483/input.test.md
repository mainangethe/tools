# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 483`

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
	loc: SourceLocation core/uncategorised/483/input.js 1:0-1:58
	path: UIDPath<core/uncategorised/483/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "arguments is a reserved word"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:50
				path: UIDPath<core/uncategorised/483/input.js>
				start: Position 1:41
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: SourceLocation core/uncategorised/483/input.js 1:9-1:14 (hello)
			}
			loc: SourceLocation core/uncategorised/483/input.js 1:0-1:58
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation core/uncategorised/483/input.js 1:14-1:16
			}
			body: JSBlockStatement {
				loc: SourceLocation core/uncategorised/483/input.js 1:17-1:58
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: SourceLocation core/uncategorised/483/input.js 1:18-1:31
					}
				]
				body: Array [
					JSFunctionDeclaration {
						id: JSBindingIdentifier {
							name: "arguments"
							loc: SourceLocation core/uncategorised/483/input.js 1:41-1:50 (arguments)
						}
						loc: SourceLocation core/uncategorised/483/input.js 1:32-1:56
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: SourceLocation core/uncategorised/483/input.js 1:53-1:56
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation core/uncategorised/483/input.js 1:50-1:52
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

 core/uncategorised/483/input.js:1:41 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ arguments is a reserved word

    function hello() {'use strict'; function arguments() { } }
                                             ^^^^^^^^^


```
