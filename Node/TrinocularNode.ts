import { Node } from '../interface';
import Context from '../Context';

/**
 * 三目运算符, 又称条件运算符
 */
export default class TrinocularNode implements Node {
  constructor(
    private condition: Node,
    private expression1: Node,
    private expression2: Node
  ) {}
  visit(context: Context) {
    return this.condition.visit(context)
      ? this.expression1.visit(context)
      : this.expression2.visit(context);
  }
}
