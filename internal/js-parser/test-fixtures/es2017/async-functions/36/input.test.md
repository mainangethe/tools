# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > 36`

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
	loc: SourceLocation es2017/async-functions/36/input.js 1:0-2:0
	path: UIDPath<es2017/async-functions/36/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:22
				path: UIDPath<es2017/async-functions/36/input.js>
				start: Position 1:21
			}
			description: Object {
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Unexpected character <emphasis>=</emphasis>"}
				advice: Array [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Expected character <emphasis>,</emphasis>"}
					}
				]
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation es2017/async-functions/36/input.js 1:0-1:27
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: SourceLocation es2017/async-functions/36/input.js 1:0-1:27
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "foo"
							loc: SourceLocation es2017/async-functions/36/input.js 1:6-1:9 (foo)
						}
						loc: SourceLocation es2017/async-functions/36/input.js 1:6-1:27
						init: JSAssignmentExpression {
							operator: "="
							loc: SourceLocation es2017/async-functions/36/input.js 1:13-1:27
							right: JSBooleanLiteral {
								value: true
								loc: SourceLocation es2017/async-functions/36/input.js 1:23-1:27
							}
							left: JSAssignmentObjectPattern {
								rest: undefined
								loc: SourceLocation es2017/async-functions/36/input.js 1:13-1:20
								properties: Array [
									JSAssignmentObjectPatternProperty {
										key: JSStaticPropertyKey {
											value: JSIdentifier {
												name: "async"
												loc: SourceLocation es2017/async-functions/36/input.js 1:15-1:20 (async)
											}
											loc: SourceLocation es2017/async-functions/36/input.js 1:15-1:20 (async)
										}
										value: JSAssignmentIdentifier {
											name: "async"
											loc: SourceLocation es2017/async-functions/36/input.js 1:15-1:20 (async)
										}
										loc: SourceLocation es2017/async-functions/36/input.js 1:15-1:20
									}
								]
							}
						}
					}
				]
			}
		}
		JSExpressionStatement {
			loc: SourceLocation es2017/async-functions/36/input.js 1:28-1:29
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation es2017/async-functions/36/input.js 1:28-1:29
			}
		}
		JSExpressionStatement {
			loc: SourceLocation es2017/async-functions/36/input.js 1:29-1:31
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation es2017/async-functions/36/input.js 1:29-1:30
			}
		}
	]
}
```

### `diagnostics`

```

 es2017/async-functions/36/input.js:1:21 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character =

    const foo = ({ async = true });
                         ^

  ℹ Expected character ,


```
