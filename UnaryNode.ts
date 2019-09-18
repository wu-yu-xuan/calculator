import { TokenType, Node } from "./interface";

/**
 * 一元运算结点
 */
export default class UnaryNode implements Node {
  constructor(private operator: TokenType, private value: Node) {}
  visit() {
    const value = this.value.visit();
    switch (this.operator) {
      case TokenType.bitwiseNot:
        return ~value;
      case TokenType.logicalNot:
        return Number(!value);
      case TokenType.plus:
        return +value;
      case TokenType.minus:
        return -value;
      default:
        throw new Error(`unexpected token ${this.operator}, expected ~!+-`);
    }
  }
}
