# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-destructuring-assignment-array-pattern > simple-assignment`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/es2015-destructuring-assignment-array-pattern/simple-assignment/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/es2015-destructuring-assignment-array-pattern/simple-assignment/input.js"
		end: Object {
			column: 0
			index: 9
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/es2015-destructuring-assignment-array-pattern/simple-assignment/input.js"
				end: Object {
					column: 8
					index: 8
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "esprima/es2015-destructuring-assignment-array-pattern/simple-assignment/input.js"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				right: JSNumericLiteral {
					value: 0
					format: undefined
					loc: Object {
						filename: "esprima/es2015-destructuring-assignment-array-pattern/simple-assignment/input.js"
						end: Object {
							column: 7
							index: 7
							line: 1
						}
						start: Object {
							column: 6
							index: 6
							line: 1
						}
					}
				}
				left: JSAssignmentArrayPattern {
					rest: undefined
					loc: Object {
						filename: "esprima/es2015-destructuring-assignment-array-pattern/simple-assignment/input.js"
						end: Object {
							column: 3
							index: 3
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
					elements: Array [
						JSAssignmentIdentifier {
							name: "a"
							loc: Object {
								filename: "esprima/es2015-destructuring-assignment-array-pattern/simple-assignment/input.js"
								identifierName: "a"
								end: Object {
									column: 2
									index: 2
									line: 1
								}
								start: Object {
									column: 1
									index: 1
									line: 1
								}
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
✔ No known problems!

```