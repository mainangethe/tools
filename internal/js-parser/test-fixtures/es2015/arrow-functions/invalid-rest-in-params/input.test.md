# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > arrow-functions > invalid-rest-in-params`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/arrow-functions/invalid-rest-in-params/input.js 1:0-6:0
	path: UIDPath<es2015/arrow-functions/invalid-rest-in-params/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "The rest element has to be the last element when destructuring"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 3:13
				path: UIDPath<es2015/arrow-functions/invalid-rest-in-params/input.js>
				start: Position 3:4
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/arrow-functions/invalid-rest-in-params/input.js 1:0-5:8
			expression: JSArrowFunctionExpression {
				loc: SourceLocation es2015/arrow-functions/invalid-rest-in-params/input.js 1:0-5:7
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: SourceLocation es2015/arrow-functions/invalid-rest-in-params/input.js 5:5-5:7
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: SourceLocation es2015/arrow-functions/invalid-rest-in-params/input.js 1:0-5:4
					params: Array [
						JSBindingIdentifier {
							name: "first"
							loc: SourceLocation es2015/arrow-functions/invalid-rest-in-params/input.js 2:4-2:9 (first)
						}
						JSBindingIdentifier {
							name: "INVALID_PLACEHOLDER"
							loc: SourceLocation es2015/arrow-functions/invalid-rest-in-params/input.js 5:5-5:4
						}
						JSBindingIdentifier {
							name: "third"
							loc: SourceLocation es2015/arrow-functions/invalid-rest-in-params/input.js 4:4-4:9 (third)
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

 es2015/arrow-functions/invalid-rest-in-params/input.js:3:4 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The rest element has to be the last element when destructuring

    1 │ (
    2 │     first,
  > 3 │     ...second,
      │     ^^^^^^^^^
    4 │     third
    5 │ ) => {};


```
