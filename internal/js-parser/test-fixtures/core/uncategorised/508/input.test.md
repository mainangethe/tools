# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 508`

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
	loc: SourceLocation core/uncategorised/508/input.js 1:0-1:49
	path: UIDPath<core/uncategorised/508/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "protected is a reserved word"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:46
				path: UIDPath<core/uncategorised/508/input.js>
				start: Position 1:37
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: SourceLocation core/uncategorised/508/input.js 1:9-1:14 (hello)
			}
			loc: SourceLocation core/uncategorised/508/input.js 1:0-1:49
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: true
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation core/uncategorised/508/input.js 1:14-1:16
			}
			body: JSBlockStatement {
				loc: SourceLocation core/uncategorised/508/input.js 1:17-1:49
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: SourceLocation core/uncategorised/508/input.js 1:19-1:32
					}
				]
				body: Array [
					JSVariableDeclarationStatement {
						loc: SourceLocation core/uncategorised/508/input.js 1:33-1:47
						declaration: JSVariableDeclaration {
							kind: "var"
							loc: SourceLocation core/uncategorised/508/input.js 1:33-1:47
							declarations: Array [
								JSVariableDeclarator {
									id: JSBindingIdentifier {
										name: "protected"
										loc: SourceLocation core/uncategorised/508/input.js 1:37-1:46 (protected)
									}
									init: undefined
									loc: SourceLocation core/uncategorised/508/input.js 1:37-1:46
								}
							]
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

 core/uncategorised/508/input.js:1:37 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ protected is a reserved word

    function hello() { "use strict"; var protected; }
                                         ^^^^^^^^^


```
