# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0213`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0213/input.js>
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
				end: Position 1:24
				path: UIDPath<esprima/invalid-syntax/migrated_0213/input.js>
				start: Position 1:15
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:9-1:14 (hello)
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:0-1:41
			body: JSBlockStatement {
				body: Array []
				loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:26-1:41
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:27-1:40
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
				loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:14-1:25
				params: Array [
					JSBindingIdentifier {
						name: "arguments"
						loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:15-1:24 (arguments)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:15-1:24
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

 esprima/invalid-syntax/migrated_0213/input.js:1:15 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ arguments is a reserved word

    function hello(arguments) {'use strict';}
                   ^^^^^^^^^


```
