# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-template-literals > tagged-interpolation`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 19
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 18
          index: 18
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: TaggedTemplateExpression {
        typeArguments: undefined
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 18
            index: 18
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        tag: ReferenceIdentifier {
          name: 'raw'
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 3
              index: 3
              line: 1
            }
            start: Object {
              column: 0
              index: 0
              line: 1
            }
          }
        }
        quasi: TemplateLiteral {
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 18
              index: 18
              line: 1
            }
            start: Object {
              column: 3
              index: 3
              line: 1
            }
          }
          expressions: Array [
            ReferenceIdentifier {
              name: 'name'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 16
                  index: 16
                  line: 1
                }
                start: Object {
                  column: 12
                  index: 12
                  line: 1
                }
              }
            }
          ]
          quasis: Array [
            TemplateElement {
              cooked: 'hello '
              raw: 'hello '
              tail: false
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 10
                  index: 10
                  line: 1
                }
                start: Object {
                  column: 4
                  index: 4
                  line: 1
                }
              }
            }
            TemplateElement {
              cooked: ''
              raw: ''
              tail: true
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 17
                  index: 17
                  line: 1
                }
                start: Object {
                  column: 17
                  index: 17
                  line: 1
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