# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > yield > accessor-name-inst-computed-yield-expr`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 1:0-10:0
	path: UIDPath<es2015/yield/accessor-name-inst-computed-yield-expr/input.js>
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 1:0-1:22
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 1:0-1:22
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "yieldSet"
							loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 1:4-1:12 (yieldSet)
						}
						init: undefined
						loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 1:4-1:12
					}
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "C"
							loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 1:14-1:15 (C)
						}
						init: undefined
						loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 1:14-1:15
					}
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "iter"
							loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 1:17-1:21 (iter)
						}
						init: undefined
						loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 1:17-1:21
					}
				]
			}
		}
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "g"
				loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 2:10-2:11 (g)
			}
			loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 2:0-9:1
			head: JSFunctionHead {
				async: false
				generator: true
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 2:11-2:13
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 2:14-9:1
				body: Array [
					JSClassDeclaration {
						id: JSBindingIdentifier {
							name: "C_"
							loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 3:8-3:10 (C_)
						}
						loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 3:2-6:3
						meta: JSClassHead {
							implements: undefined
							superClass: undefined
							superTypeParameters: undefined
							typeParameters: undefined
							loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 3:2-6:3
							body: Array [
								JSClassMethod {
									kind: "get"
									key: JSComputedPropertyKey {
										value: JSYieldExpression {
											argument: undefined
											delegate: false
											loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 4:9-4:14
										}
										loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 4:8-4:15
									}
									loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 4:4-4:41
									meta: JSClassPropertyMeta {
										abstract: false
										accessibility: undefined
										optional: false
										readonly: false
										static: false
										typeAnnotation: undefined
										loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 4:4-4:15
										start: Position 4:4
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
										loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 4:15-4:17
									}
									body: JSBlockStatement {
										directives: Array []
										loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 4:18-4:41
										body: Array [
											JSReturnStatement {
												loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 4:20-4:39
												argument: JSStringLiteral {
													value: "get yield"
													loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 4:27-4:38
												}
											}
										]
									}
								}
								JSClassMethod {
									kind: "set"
									key: JSComputedPropertyKey {
										value: JSYieldExpression {
											argument: undefined
											delegate: false
											loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 5:9-5:14
										}
										loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 5:8-5:15
									}
									loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 5:4-5:44
									meta: JSClassPropertyMeta {
										abstract: false
										accessibility: undefined
										optional: false
										readonly: false
										static: false
										typeAnnotation: undefined
										loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 5:4-5:15
										start: Position 5:4
									}
									body: JSBlockStatement {
										directives: Array []
										loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 5:23-5:44
										body: Array [
											JSExpressionStatement {
												loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 5:25-5:42
												expression: JSAssignmentExpression {
													operator: "="
													loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 5:25-5:41
													left: JSAssignmentIdentifier {
														name: "yieldSet"
														loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 5:25-5:33 (yieldSet)
													}
													right: JSReferenceIdentifier {
														name: "param"
														loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 5:36-5:41 (param)
													}
												}
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
										loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 5:15-5:22
										params: Array [
											JSBindingIdentifier {
												name: "param"
												loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 5:16-5:21 (param)
												meta: JSPatternMeta {
													optional: undefined
													typeAnnotation: undefined
													loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 5:16-5:21
												}
											}
										]
									}
								}
							]
						}
					}
					JSExpressionStatement {
						loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 8:2-8:9
						expression: JSAssignmentExpression {
							operator: "="
							loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 8:2-8:8
							left: JSAssignmentIdentifier {
								name: "C"
								loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 8:2-8:3 (C)
							}
							right: JSReferenceIdentifier {
								name: "C_"
								loc: SourceLocation es2015/yield/accessor-name-inst-computed-yield-expr/input.js 8:6-8:8 (C_)
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

```
