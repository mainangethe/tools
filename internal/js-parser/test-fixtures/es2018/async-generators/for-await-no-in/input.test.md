# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2018 > async-generators > for-await-no-in`

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
	loc: SourceLocation es2018/async-generators/for-await-no-in/input.js 1:0-4:0
	path: UIDPath<es2018/async-generators/for-await-no-in/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Can't have an await on a regular for loop"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 2:11
				path: UIDPath<es2018/async-generators/for-await-no-in/input.js>
				start: Position 2:11
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "f"
				loc: SourceLocation es2018/async-generators/for-await-no-in/input.js 1:15-1:16 (f)
			}
			loc: SourceLocation es2018/async-generators/for-await-no-in/input.js 1:0-3:1
			head: JSFunctionHead {
				async: true
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2018/async-generators/for-await-no-in/input.js 1:16-1:18
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation es2018/async-generators/for-await-no-in/input.js 1:19-3:1
				body: Array [
					JSForInStatement {
						body: JSEmptyStatement {loc: SourceLocation es2018/async-generators/for-await-no-in/input.js 2:24-2:25}
						loc: SourceLocation es2018/async-generators/for-await-no-in/input.js 2:2-2:25
						right: JSReferenceIdentifier {
							name: "y"
							loc: SourceLocation es2018/async-generators/for-await-no-in/input.js 2:22-2:23 (y)
						}
						left: JSVariableDeclaration {
							kind: "let"
							loc: SourceLocation es2018/async-generators/for-await-no-in/input.js 2:13-2:18
							declarations: Array [
								JSVariableDeclarator {
									id: JSBindingIdentifier {
										name: "x"
										loc: SourceLocation es2018/async-generators/for-await-no-in/input.js 2:17-2:18 (x)
									}
									init: undefined
									loc: SourceLocation es2018/async-generators/for-await-no-in/input.js 2:17-2:18
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

 es2018/async-generators/for-await-no-in/input.js:2:11 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Can't have an await on a regular for loop

    1 │ async function f() {
  > 2 │   for await (let x in y);
      │            ^
    3 │ }


```
