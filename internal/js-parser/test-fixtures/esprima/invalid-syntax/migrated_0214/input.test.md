# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0214`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0214/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0214/input.js>
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
				end: Position 1:52
				path: UIDPath<esprima/invalid-syntax/migrated_0214/input.js>
				start: Position 1:48
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: SourceLocation esprima/invalid-syntax/migrated_0214/input.js 1:9-1:14 (hello)
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0214/input.js 1:0-1:58
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation esprima/invalid-syntax/migrated_0214/input.js 1:14-1:16
			}
			body: JSBlockStatement {
				loc: SourceLocation esprima/invalid-syntax/migrated_0214/input.js 1:17-1:58
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: SourceLocation esprima/invalid-syntax/migrated_0214/input.js 1:19-1:32
					}
				]
				body: Array [
					JSFunctionDeclaration {
						id: JSBindingIdentifier {
							name: "inner"
							loc: SourceLocation esprima/invalid-syntax/migrated_0214/input.js 1:42-1:47 (inner)
						}
						loc: SourceLocation esprima/invalid-syntax/migrated_0214/input.js 1:33-1:56
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: SourceLocation esprima/invalid-syntax/migrated_0214/input.js 1:54-1:56
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation esprima/invalid-syntax/migrated_0214/input.js 1:47-1:53
							params: Array [
								JSBindingIdentifier {
									name: "eval"
									loc: SourceLocation esprima/invalid-syntax/migrated_0214/input.js 1:48-1:52 (eval)
									meta: JSPatternMeta {
										optional: undefined
										typeAnnotation: undefined
										loc: SourceLocation esprima/invalid-syntax/migrated_0214/input.js 1:48-1:52
									}
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

 esprima/invalid-syntax/migrated_0214/input.js:1:48 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ eval is a reserved word

    function hello() { 'use strict'; function inner(eval) {} }
                                                    ^^^^


```
