# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 494`

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
	loc: SourceLocation core/uncategorised/494/input.js 1:0-1:64
	path: UIDPath<core/uncategorised/494/input.js>
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
				end: Position 1:53
				path: UIDPath<core/uncategorised/494/input.js>
				start: Position 1:49
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: SourceLocation core/uncategorised/494/input.js 1:9-1:14 (hello)
			}
			loc: SourceLocation core/uncategorised/494/input.js 1:0-1:64
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation core/uncategorised/494/input.js 1:14-1:16
			}
			body: JSBlockStatement {
				loc: SourceLocation core/uncategorised/494/input.js 1:17-1:64
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: SourceLocation core/uncategorised/494/input.js 1:18-1:31
					}
				]
				body: Array [
					JSExpressionStatement {
						loc: SourceLocation core/uncategorised/494/input.js 1:32-1:62
						expression: JSObjectExpression {
							loc: SourceLocation core/uncategorised/494/input.js 1:33-1:60
							properties: Array [
								JSObjectProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "s"
											loc: SourceLocation core/uncategorised/494/input.js 1:35-1:36 (s)
										}
										loc: SourceLocation core/uncategorised/494/input.js 1:35-1:36
									}
									value: JSFunctionExpression {
										id: JSBindingIdentifier {
											name: "s"
											loc: SourceLocation core/uncategorised/494/input.js 1:47-1:48 (s)
										}
										loc: SourceLocation core/uncategorised/494/input.js 1:38-1:58
										body: JSBlockStatement {
											body: Array []
											directives: Array []
											loc: SourceLocation core/uncategorised/494/input.js 1:55-1:58
										}
										head: JSFunctionHead {
											async: false
											generator: false
											hasHoistedVars: false
											rest: undefined
											returnType: undefined
											thisType: undefined
											typeParameters: undefined
											loc: SourceLocation core/uncategorised/494/input.js 1:48-1:54
											params: Array [
												JSBindingIdentifier {
													name: "eval"
													loc: SourceLocation core/uncategorised/494/input.js 1:49-1:53 (eval)
													meta: JSPatternMeta {
														optional: undefined
														typeAnnotation: undefined
														loc: SourceLocation core/uncategorised/494/input.js 1:49-1:53
													}
												}
											]
										}
									}
									loc: SourceLocation core/uncategorised/494/input.js 1:35-1:58
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

 core/uncategorised/494/input.js:1:49 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ eval is a reserved word

    function hello() {'use strict'; ({ s: function s(eval) { } }); }
                                                     ^^^^


```
