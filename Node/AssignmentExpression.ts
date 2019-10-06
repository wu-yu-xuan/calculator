import { Node } from '../interface';
import Context from '../Context';

/**
 * 赋值语句, 例如: `a = 1;`
 */
export default class AssignmentExpression implements Node {
  constructor(private lvalue: string, private rvalue: Node) {}
  visit(context: Context) {
    const rvalueResult = this.rvalue.visit(context);
    context.set(this.lvalue, rvalueResult);
    return rvalueResult;
  }
}
