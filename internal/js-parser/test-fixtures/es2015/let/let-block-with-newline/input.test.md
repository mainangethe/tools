# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > let > let-block-with-newline`

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
	loc: SourceLocation es2015/let/let-block-with-newline/input.js 1:0-5:0
	path: UIDPath<es2015/let/let-block-with-newline/input.js>
	comments: Array [
		CommentLine {
			id: "0"
			value: " ASI"
			loc: SourceLocation es2015/let/let-block-with-newline/input.js 2:11-2:17
		}
	]
	body: Array [
		JSIfStatement {
			alternate: undefined
			loc: SourceLocation es2015/let/let-block-with-newline/input.js 1:0-4:1
			test: JSBooleanLiteral {
				value: false
				loc: SourceLocation es2015/let/let-block-with-newline/input.js 1:4-1:9
			}
			consequent: JSBlockStatement {
				directives: Array []
				loc: SourceLocation es2015/let/let-block-with-newline/input.js 1:11-4:1
				body: Array [
					JSLabeledStatement {
						loc: SourceLocation es2015/let/let-block-with-newline/input.js 2:4-2:10
						trailingComments: Array ["0"]
						label: JSIdentifier {
							name: "L"
							loc: SourceLocation es2015/let/let-block-with-newline/input.js 2:4-2:5 (L)
						}
						body: JSExpressionStatement {
							trailingComments: undefined
							loc: SourceLocation es2015/let/let-block-with-newline/input.js 2:7-2:10
							expression: JSReferenceIdentifier {
								name: "let"
								trailingComments: undefined
								loc: SourceLocation es2015/let/let-block-with-newline/input.js 2:7-2:10 (let)
							}
						}
					}
					JSBlockStatement {
						body: Array []
						directives: Array []
						leadingComments: Array ["0"]
						loc: SourceLocation es2015/let/let-block-with-newline/input.js 3:4-3:6
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
