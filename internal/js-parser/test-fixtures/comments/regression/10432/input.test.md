# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `comments > regression > 10432`

### `ast`

```javascript
JSRoot {
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation comments/regression/10432/input.js 1:0-6:0
	path: UIDPath<comments/regression/10432/input.js>
	comments: Array [
		CommentBlock {
			id: "0"
			value: " istanbul ignore next "
			loc: SourceLocation comments/regression/10432/input.js 2:0-2:26
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation comments/regression/10432/input.js 1:0-1:36
			trailingComments: Array ["0"]
			declaration: JSVariableDeclaration {
				kind: "const"
				trailingComments: undefined
				loc: SourceLocation comments/regression/10432/input.js 1:0-1:36
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "socket"
							loc: SourceLocation comments/regression/10432/input.js 1:6-1:12 (socket)
						}
						trailingComments: undefined
						loc: SourceLocation comments/regression/10432/input.js 1:6-1:36
						init: JSCallExpression {
							trailingComments: undefined
							loc: SourceLocation comments/regression/10432/input.js 1:15-1:36
							callee: JSReferenceIdentifier {
								name: "socketClient"
								loc: SourceLocation comments/regression/10432/input.js 1:15-1:27 (socketClient)
							}
							arguments: Array [
								JSReferenceIdentifier {
									name: "address"
									loc: SourceLocation comments/regression/10432/input.js 1:28-1:35 (address)
								}
							]
						}
					}
				]
			}
		}
		JSExpressionStatement {
			leadingComments: Array ["0"]
			loc: SourceLocation comments/regression/10432/input.js 3:0-5:2
			expression: JSCallExpression {
				leadingComments: undefined
				loc: SourceLocation comments/regression/10432/input.js 3:0-5:2
				callee: JSMemberExpression {
					leadingComments: undefined
					loc: SourceLocation comments/regression/10432/input.js 3:0-3:9
					object: JSReferenceIdentifier {
						name: "socket"
						leadingComments: undefined
						loc: SourceLocation comments/regression/10432/input.js 3:0-3:6 (socket)
					}
					property: JSStaticMemberProperty {
						value: JSIdentifier {
							name: "on"
							loc: SourceLocation comments/regression/10432/input.js 3:7-3:9 (on)
						}
						loc: SourceLocation comments/regression/10432/input.js 3:7-3:9 (on)
					}
				}
				arguments: Array [
					JSStringLiteral {
						value: "connect"
						loc: SourceLocation comments/regression/10432/input.js 3:10-3:19
					}
					JSFunctionExpression {
						id: undefined
						loc: SourceLocation comments/regression/10432/input.js 3:21-5:1
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation comments/regression/10432/input.js 3:30-3:32
						}
						body: JSBlockStatement {
							directives: Array []
							loc: SourceLocation comments/regression/10432/input.js 3:33-5:1
							body: Array [
								JSExpressionStatement {
									loc: SourceLocation comments/regression/10432/input.js 4:2-4:34
									expression: JSCallExpression {
										loc: SourceLocation comments/regression/10432/input.js 4:2-4:34
										callee: JSReferenceIdentifier {
											name: "debug"
											loc: SourceLocation comments/regression/10432/input.js 4:2-4:7 (debug)
										}
										arguments: Array [
											JSBinaryExpression {
												operator: "+"
												loc: SourceLocation comments/regression/10432/input.js 4:8-4:33
												left: JSStringLiteral {
													value: "Connected to "
													loc: SourceLocation comments/regression/10432/input.js 4:8-4:23
												}
												right: JSReferenceIdentifier {
													name: "address"
													loc: SourceLocation comments/regression/10432/input.js 4:26-4:33 (address)
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
		}
	]
}
```

### `diagnostics`

```

```
