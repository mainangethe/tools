# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `test262 > rest-parameter > array-pattern-single-element-with-initializer`

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
	loc: SourceLocation test262/rest-parameter/array-pattern-single-element-with-initializer/input.js 1:0-2:0
	path: UIDPath<test262/rest-parameter/array-pattern-single-element-with-initializer/input.js>
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "singleElementWithInitializer"
				loc: SourceLocation test262/rest-parameter/array-pattern-single-element-with-initializer/input.js 1:9-1:37 (singleElementWithInitializer)
			}
			loc: SourceLocation test262/rest-parameter/array-pattern-single-element-with-initializer/input.js 1:0-1:52
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation test262/rest-parameter/array-pattern-single-element-with-initializer/input.js 1:50-1:52
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation test262/rest-parameter/array-pattern-single-element-with-initializer/input.js 1:37-1:49
				rest: JSBindingArrayPattern {
					rest: undefined
					loc: SourceLocation test262/rest-parameter/array-pattern-single-element-with-initializer/input.js 1:41-1:48
					meta: JSPatternMeta {
						optional: undefined
						typeAnnotation: undefined
						loc: SourceLocation test262/rest-parameter/array-pattern-single-element-with-initializer/input.js 1:41-1:48
					}
					elements: Array [
						JSBindingAssignmentPattern {
							loc: SourceLocation test262/rest-parameter/array-pattern-single-element-with-initializer/input.js 1:42-1:47
							right: JSNumericLiteral {
								value: 0
								format: undefined
								loc: SourceLocation test262/rest-parameter/array-pattern-single-element-with-initializer/input.js 1:46-1:47
							}
							left: JSBindingIdentifier {
								name: "a"
								loc: SourceLocation test262/rest-parameter/array-pattern-single-element-with-initializer/input.js 1:42-1:43 (a)
								meta: JSPatternMeta {
									optional: undefined
									typeAnnotation: undefined
									loc: SourceLocation test262/rest-parameter/array-pattern-single-element-with-initializer/input.js 1:42-1:43
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

```
