# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-arrow-function > non-arrow-param-followed-by-arrow`

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
	loc: SourceLocation esprima/es2015-arrow-function/non-arrow-param-followed-by-arrow/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-arrow-function/non-arrow-param-followed-by-arrow/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Function parameters can't be parenthesized"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:3
				path: UIDPath<esprima/es2015-arrow-function/non-arrow-param-followed-by-arrow/input.js>
				start: Position 1:2
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-arrow-function/non-arrow-param-followed-by-arrow/input.js 1:0-1:10
			expression: JSArrowFunctionExpression {
				loc: SourceLocation esprima/es2015-arrow-function/non-arrow-param-followed-by-arrow/input.js 1:0-1:10
				body: JSNumericLiteral {
					value: 0
					format: undefined
					loc: SourceLocation esprima/es2015-arrow-function/non-arrow-param-followed-by-arrow/input.js 1:9-1:10
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: SourceLocation esprima/es2015-arrow-function/non-arrow-param-followed-by-arrow/input.js 1:0-1:8
					params: Array [
						JSBindingIdentifier {
							name: "a"
							loc: SourceLocation esprima/es2015-arrow-function/non-arrow-param-followed-by-arrow/input.js 1:2-1:3 (a)
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

 esprima/es2015-arrow-function/non-arrow-param-followed-by-arrow/input.js:1:2 parse(js) ━━━━━━━━━━━━

  ✖ Function parameters can't be parenthesized

    ((a)) => 0
      ^


```
