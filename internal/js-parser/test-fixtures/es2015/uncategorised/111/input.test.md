# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 111`

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
	loc: SourceLocation es2015/uncategorised/111/input.js 1:0-1:26
	path: UIDPath<es2015/uncategorised/111/input.js>
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation es2015/uncategorised/111/input.js 1:0-1:26
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation es2015/uncategorised/111/input.js 1:0-1:26
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "A"
							loc: SourceLocation es2015/uncategorised/111/input.js 1:4-1:5 (A)
						}
						loc: SourceLocation es2015/uncategorised/111/input.js 1:4-1:26
						init: JSClassExpression {
							id: undefined
							loc: SourceLocation es2015/uncategorised/111/input.js 1:8-1:26
							meta: JSClassHead {
								body: Array []
								implements: undefined
								superTypeParameters: undefined
								typeParameters: undefined
								loc: SourceLocation es2015/uncategorised/111/input.js 1:8-1:26
								superClass: JSReferenceIdentifier {
									name: "B"
									loc: SourceLocation es2015/uncategorised/111/input.js 1:22-1:23 (B)
								}
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
