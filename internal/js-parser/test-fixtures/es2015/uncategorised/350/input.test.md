# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 350`

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
	loc: SourceLocation es2015/uncategorised/350/input.js 1:0-1:36
	path: UIDPath<es2015/uncategorised/350/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/350/input.js 1:0-1:36
			expression: JSObjectExpression {
				loc: SourceLocation es2015/uncategorised/350/input.js 1:1-1:35
				properties: Array [
					JSObjectProperty {
						key: JSComputedPropertyKey {
							value: JSStringLiteral {
								value: "__proto__"
								loc: SourceLocation es2015/uncategorised/350/input.js 1:4-1:15
							}
							loc: SourceLocation es2015/uncategorised/350/input.js 1:3-1:16
						}
						value: JSNumericLiteral {
							value: 1
							format: undefined
							loc: SourceLocation es2015/uncategorised/350/input.js 1:18-1:19
						}
						loc: SourceLocation es2015/uncategorised/350/input.js 1:3-1:19
					}
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "__proto__"
								loc: SourceLocation es2015/uncategorised/350/input.js 1:21-1:30 (__proto__)
							}
							loc: SourceLocation es2015/uncategorised/350/input.js 1:21-1:30
						}
						value: JSNumericLiteral {
							value: 2
							format: undefined
							loc: SourceLocation es2015/uncategorised/350/input.js 1:32-1:33
						}
						loc: SourceLocation es2015/uncategorised/350/input.js 1:21-1:33
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
