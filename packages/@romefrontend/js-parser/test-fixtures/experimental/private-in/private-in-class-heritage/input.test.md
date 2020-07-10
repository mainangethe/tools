# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > private-in > private-in-class-heritage`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 74
			line: 7
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unknown start to an class heritage"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 21
					index: 54
					line: 4
				}
				start: Object {
					column: 21
					index: 54
					line: 4
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Foo"
				loc: Object {
					filename: "input.js"
					identifierName: "Foo"
					end: Object {
						column: 9
						index: 9
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 1
					index: 73
					line: 6
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 1
						index: 73
						line: 6
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "x"
								loc: Object {
									filename: "input.js"
									identifierName: "x"
									end: Object {
										column: 4
										index: 16
										line: 2
									}
									start: Object {
										column: 3
										index: 15
										line: 2
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 16
									line: 2
								}
								start: Object {
									column: 2
									index: 14
									line: 2
								}
							}
						}
						value: JSNumericLiteral {
							value: 1
							format: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 8
									index: 20
									line: 2
								}
								start: Object {
									column: 7
									index: 19
									line: 2
								}
							}
						}
						typeAnnotation: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 9
								index: 21
								line: 2
							}
							start: Object {
								column: 2
								index: 14
								line: 2
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 14
								line: 2
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 16
									line: 2
								}
								start: Object {
									column: 2
									index: 14
									line: 2
								}
							}
						}
					}
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "test"
								loc: Object {
									filename: "input.js"
									identifierName: "test"
									end: Object {
										column: 6
										index: 28
										line: 3
									}
									start: Object {
										column: 2
										index: 24
										line: 3
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 6
									index: 28
									line: 3
								}
								start: Object {
									column: 2
									index: 24
									line: 3
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 3
								index: 71
								line: 5
							}
							start: Object {
								column: 2
								index: 24
								line: 3
							}
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
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 8
									index: 30
									line: 3
								}
								start: Object {
									column: 6
									index: 28
									line: 3
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 24
								line: 3
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 6
									index: 28
									line: 3
								}
								start: Object {
									column: 2
									index: 24
									line: 3
								}
							}
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 3
									index: 71
									line: 5
								}
								start: Object {
									column: 9
									index: 31
									line: 3
								}
							}
							body: Array [
								JSClassDeclaration {
									id: JSBindingIdentifier {
										name: "X"
										loc: Object {
											filename: "input.js"
											identifierName: "X"
											end: Object {
												column: 11
												index: 44
												line: 4
											}
											start: Object {
												column: 10
												index: 43
												line: 4
											}
										}
									}
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 29
											index: 62
											line: 4
										}
										start: Object {
											column: 4
											index: 37
											line: 4
										}
									}
									meta: JSClassHead {
										implements: undefined
										superTypeParameters: undefined
										typeParameters: undefined
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 29
												index: 62
												line: 4
											}
											start: Object {
												column: 4
												index: 37
												line: 4
											}
										}
										superClass: JSReferenceIdentifier {
											name: "INVALID_PLACEHOLDER"
											loc: Object {
												filename: "input.js"
												end: Object {
													column: 22
													index: 55
													line: 4
												}
												start: Object {
													column: 21
													index: 54
													line: 4
												}
											}
										}
										body: Array [
											JSClassProperty {
												key: JSStaticPropertyKey {
													value: JSIdentifier {
														name: ""
														loc: Object {
															filename: "input.js"
															identifierName: ""
															end: Object {
																column: 28
																index: 61
																line: 4
															}
															start: Object {
																column: 27
																index: 60
																line: 4
															}
														}
													}
													loc: Object {
														filename: "input.js"
														end: Object {
															column: 28
															index: 61
															line: 4
														}
														start: Object {
															column: 27
															index: 60
															line: 4
														}
													}
												}
												value: undefined
												definite: undefined
												typeAnnotation: undefined
												loc: Object {
													filename: "input.js"
													end: Object {
														column: 28
														index: 61
														line: 4
													}
													start: Object {
														column: 27
														index: 60
														line: 4
													}
												}
												meta: JSClassPropertyMeta {
													abstract: false
													accessibility: undefined
													optional: false
													readonly: false
													static: false
													typeAnnotation: undefined
													start: Object {
														column: 27
														index: 60
														line: 4
													}
													loc: Object {
														filename: "input.js"
														end: Object {
															column: 28
															index: 61
															line: 4
														}
														start: Object {
															column: 27
															index: 60
															line: 4
														}
													}
												}
											}
										]
									}
								}
								JSExpressionStatement {
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 30
											index: 63
											line: 4
										}
										start: Object {
											column: 29
											index: 62
											line: 4
										}
									}
									expression: JSReferenceIdentifier {
										name: "INVALID_PLACEHOLDER"
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 30
												index: 63
												line: 4
											}
											start: Object {
												column: 29
												index: 62
												line: 4
											}
										}
									}
								}
								JSBlockStatement {
									body: Array []
									directives: Array []
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 33
											index: 66
											line: 4
										}
										start: Object {
											column: 31
											index: 64
											line: 4
										}
									}
								}
								JSEmptyStatement {
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 34
											index: 67
											line: 4
										}
										start: Object {
											column: 33
											index: 66
											line: 4
										}
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

 input.js:4:21 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an class heritage

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```