import { Node } from "./interface";

/**
 * 三目运算符, 又称条件运算符
 */
export default class TrinocularNode implements Node {
  constructor(
    private condition: Node,
    private expression1: Node,
    private expression2: Node
  ) {}
  visit() {
    return this.condition.visit()
      ? this.expression1.visit()
      : this.expression2.visit();
  }
}
