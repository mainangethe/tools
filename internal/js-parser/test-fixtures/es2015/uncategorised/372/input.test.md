# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 372`

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
	loc: SourceLocation es2015/uncategorised/372/input.js 1:0-2:0
	path: UIDPath<es2015/uncategorised/372/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "enum is a reserved word"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:12
				path: UIDPath<es2015/uncategorised/372/input.js>
				start: Position 1:8
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation es2015/uncategorised/372/input.js 1:0-1:23
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: SourceLocation es2015/uncategorised/372/input.js 1:0-1:23
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingObjectPattern {
							rest: undefined
							loc: SourceLocation es2015/uncategorised/372/input.js 1:6-1:14
							properties: Array [
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "enum"
											loc: SourceLocation es2015/uncategorised/372/input.js 1:8-1:12 (enum)
										}
										loc: SourceLocation es2015/uncategorised/372/input.js 1:8-1:12
									}
									value: JSBindingIdentifier {
										name: "enum"
										loc: SourceLocation es2015/uncategorised/372/input.js 1:8-1:12 (enum)
									}
									loc: SourceLocation es2015/uncategorised/372/input.js 1:8-1:12
								}
							]
						}
						loc: SourceLocation es2015/uncategorised/372/input.js 1:6-1:22
						init: JSCallExpression {
							arguments: Array []
							loc: SourceLocation es2015/uncategorised/372/input.js 1:17-1:22
							callee: JSReferenceIdentifier {
								name: "foo"
								loc: SourceLocation es2015/uncategorised/372/input.js 1:17-1:20 (foo)
							}
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

 es2015/uncategorised/372/input.js:1:8 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ enum is a reserved word

    const { enum } = foo();
            ^^^^


```
