# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2018 > object-rest-spread > 11`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation es2018/object-rest-spread/11/input.js 1:0-3:0
	path: UIDPath<es2018/object-rest-spread/11/input.js>
	body: Array [
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: SourceLocation es2018/object-rest-spread/11/input.js 1:0-1:21
			declaration: JSVariableDeclarationStatement {
				loc: SourceLocation es2018/object-rest-spread/11/input.js 1:7-1:21
				declaration: JSVariableDeclaration {
					kind: "const"
					loc: SourceLocation es2018/object-rest-spread/11/input.js 1:7-1:21
					declarations: Array [
						JSVariableDeclarator {
							id: JSBindingIdentifier {
								name: "foo"
								loc: SourceLocation es2018/object-rest-spread/11/input.js 1:13-1:16 (foo)
							}
							loc: SourceLocation es2018/object-rest-spread/11/input.js 1:13-1:20
							init: JSNumericLiteral {
								value: 1
								format: undefined
								loc: SourceLocation es2018/object-rest-spread/11/input.js 1:19-1:20
							}
						}
					]
				}
			}
		}
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: undefined
			loc: SourceLocation es2018/object-rest-spread/11/input.js 2:0-2:35
			declaration: JSVariableDeclarationStatement {
				loc: SourceLocation es2018/object-rest-spread/11/input.js 2:7-2:35
				declaration: JSVariableDeclaration {
					kind: "const"
					loc: SourceLocation es2018/object-rest-spread/11/input.js 2:7-2:35
					declarations: Array [
						JSVariableDeclarator {
							id: JSBindingObjectPattern {
								loc: SourceLocation es2018/object-rest-spread/11/input.js 2:13-2:28
								rest: JSBindingIdentifier {
									name: "foo"
									loc: SourceLocation es2018/object-rest-spread/11/input.js 2:23-2:26 (foo)
								}
								properties: Array [
									JSBindingObjectPatternProperty {
										key: JSStaticPropertyKey {
											value: JSIdentifier {
												name: "bar"
												loc: SourceLocation es2018/object-rest-spread/11/input.js 2:15-2:18 (bar)
											}
											loc: SourceLocation es2018/object-rest-spread/11/input.js 2:15-2:18
										}
										value: JSBindingIdentifier {
											name: "bar"
											loc: SourceLocation es2018/object-rest-spread/11/input.js 2:15-2:18 (bar)
										}
										loc: SourceLocation es2018/object-rest-spread/11/input.js 2:15-2:18
									}
								]
							}
							loc: SourceLocation es2018/object-rest-spread/11/input.js 2:13-2:34
							init: JSReferenceIdentifier {
								name: "baz"
								loc: SourceLocation es2018/object-rest-spread/11/input.js 2:31-2:34 (baz)
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
