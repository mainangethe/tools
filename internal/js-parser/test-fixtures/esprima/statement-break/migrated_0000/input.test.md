# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > statement-break > migrated_0000`

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
	loc: SourceLocation esprima/statement-break/migrated_0000/input.js 1:0-2:0
	path: UIDPath<esprima/statement-break/migrated_0000/input.js>
	body: Array [
		JSWhileStatement {
			loc: SourceLocation esprima/statement-break/migrated_0000/input.js 1:0-1:22
			test: JSBooleanLiteral {
				value: true
				loc: SourceLocation esprima/statement-break/migrated_0000/input.js 1:7-1:11
			}
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation esprima/statement-break/migrated_0000/input.js 1:13-1:22
				body: Array [
					JSBreakStatement {
						label: undefined
						loc: SourceLocation esprima/statement-break/migrated_0000/input.js 1:15-1:20
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
