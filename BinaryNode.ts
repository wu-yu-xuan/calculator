import { TokenType, Node } from "./interface";

/**
 * 二元运算结点
 */
export default class BinaryNode implements Node {
  constructor(
    private left: Node,
    private operation: TokenType,
    private right: Node
  ) {}
  visit() {
    const left = this.left.visit();
    const right = this.right.visit();
    switch (this.operation) {
      case TokenType.plus:
        return left + right;
      case TokenType.minus:
        return left - right;
      case TokenType.mul:
        return left * right;
      case TokenType.div:
        return left / right;
      case TokenType.mod:
        return left % right;
      case TokenType.exponentiation:
        return left ** right;
      default:
        throw new Error(
          `unexpected operation ${this.operation}, expected +-*/`
        );
    }
  }
}
