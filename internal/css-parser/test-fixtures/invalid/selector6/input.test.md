# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/css-parser/index.test.ts --update-snapshots` to update.

## `invalid > selector6`

```javascript
CSSRoot {
	comments: Array []
	corrupt: false
	integrity: undefined
	loc: SourceLocation invalid/selector6/input.css 1:0-3:1
	path: RelativePath<invalid/selector6/input.css>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "css"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Expected to close attribute selector with a right square bracket <emphasis>]</emphasis>."}
			}
			location: Object {
				integrity: undefined
				language: "css"
				sourceText: undefined
				end: Position 1:8
				path: RelativePath<invalid/selector6/input.css>
				start: Position 1:7
			}
		}
	]
	body: Array [
		CSSRule {
			loc: SourceLocation invalid/selector6/input.css 1:0-3:1
			block: CSSBlock {
				value: Array [
					CSSDeclaration {
						name: "color"
						value: Array [
							CSSIdentifier {
								value: "purple"
								loc: SourceLocation invalid/selector6/input.css 2:9-2:15
							}
						]
						important: false
						loc: SourceLocation invalid/selector6/input.css 2:2-2:15
					}
				]
				startingTokenValue: "{"
				loc: SourceLocation invalid/selector6/input.css 1:18-3:1
			}
			prelude: Array [
				CSSSelector {
					loc: SourceLocation invalid/selector6/input.css 1:0-1:8
					patterns: Array [
						CSSTypeSelector {
							value: "a"
							loc: SourceLocation invalid/selector6/input.css 1:0-1:1
						}
					]
				}
				CSSSelector {
					patterns: Array []
					loc: SourceLocation invalid/selector6/input.css 1:8-1:9
				}
				CSSSelector {
					patterns: Array []
					loc: SourceLocation invalid/selector6/input.css 1:9-1:16
				}
				CSSSelector {
					patterns: Array []
					loc: SourceLocation invalid/selector6/input.css 1:16-1:17
				}
				CSSSelector {
					patterns: Array []
					loc: SourceLocation invalid/selector6/input.css 1:17-1:18
				}
			]
		}
	]
}
```
