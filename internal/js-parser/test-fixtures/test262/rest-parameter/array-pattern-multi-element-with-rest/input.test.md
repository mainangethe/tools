# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `test262 > rest-parameter > array-pattern-multi-element-with-rest`

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
	loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:0-2:0
	path: UIDPath<test262/rest-parameter/array-pattern-multi-element-with-rest/input.js>
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "multiElementWithRest"
				loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:9-1:29 (multiElementWithRest)
			}
			loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:0-1:49
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:47-1:49
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:29-1:46
				rest: JSBindingArrayPattern {
					loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:33-1:45
					meta: JSPatternMeta {
						optional: undefined
						typeAnnotation: undefined
						loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:33-1:45
					}
					rest: JSBindingIdentifier {
						name: "c"
						loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:43-1:44 (c)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:43-1:44
						}
					}
					elements: Array [
						JSBindingIdentifier {
							name: "a"
							loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:34-1:35 (a)
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:34-1:35
							}
						}
						JSBindingIdentifier {
							name: "b"
							loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:37-1:38 (b)
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: SourceLocation test262/rest-parameter/array-pattern-multi-element-with-rest/input.js 1:37-1:38
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

```
