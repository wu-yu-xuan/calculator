# calculator

[![wtfpl badge](https://img.shields.io/github/license/wu-yu-xuan/calculator)](https://github.com/wu-yu-xuan/calculator/blob/master/LICENSE)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/wu-yu-xuan/calculator)

数字表达式计算器

**Lexer** -- tokens --> **Parser** -- AST --> **Interpreter**

使用 `yarn test` 来运行测试用例

## 支持的运算符

| 优先级 | 运算类型   | 符号          |
| ------ | ---------- | ------------- |
| 20     | 圆括号     | `(...)`       |
| 16     | 逻辑非     | `!...`        |
| 16     | 按位非     | `~...`        |
| 16     | 一元加法   | `+...`        |
| 16     | 一元减法   | `-...`        |
| 14     | 乘法       | `...*...`     |
| 14     | 除法       | `.../...`     |
| 14     | 加法       | `...+...`     |
| 14     | 减法       | `...-...`     |
| 4      | 条件运算符 | `...?...:...` |

## 参考资料

- [Let’s Build A Simple Interpreter. Part 7: Abstract Syntax Trees](https://ruslanspivak.com/lsbasi-part7/)
- [运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
