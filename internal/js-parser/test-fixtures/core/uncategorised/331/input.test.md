# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 331`

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
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/331/input.js 1:0-3:5
	path: UIDPath<core/uncategorised/331/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/331/input.js 1:0-1:3
			expression: JSUpdateExpression {
				operator: "++"
				prefix: false
				loc: SourceLocation core/uncategorised/331/input.js 1:0-1:3
				argument: JSReferenceIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/331/input.js 1:0-1:1 (x)
				}
			}
		}
		JSBlockStatement {
			body: Array []
			directives: Array []
			loc: SourceLocation core/uncategorised/331/input.js 2:0-2:2
		}
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/331/input.js 3:0-3:5
			expression: JSRegExpLiteral {
				global: false
				insensitive: false
				multiline: false
				noDotNewline: false
				sticky: false
				unicode: false
				loc: SourceLocation core/uncategorised/331/input.js 3:0-3:5
				expression: JSRegExpSubExpression {
					loc: SourceLocation core/uncategorised/331/input.js 3:1-3:4
					body: Array [
						JSRegExpCharacter {
							value: "f"
							loc: SourceLocation core/uncategorised/331/input.js 3:1-3:2
						}
						JSRegExpCharacter {
							value: "o"
							loc: SourceLocation core/uncategorised/331/input.js 3:2-3:3
						}
						JSRegExpCharacter {
							value: "o"
							loc: SourceLocation core/uncategorised/331/input.js 3:3-3:4
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
