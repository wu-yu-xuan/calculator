import { Node, DeclarationType } from '../interface';
import Context from '../Context';

/**
 * 声明语句, 例如: `const a = 1;`, `let b;`
 */
export default class DeclarationExpression implements Node {
  constructor(
    private type: DeclarationType,
    private lvalue: string,
    private rvalue?: Node
  ) {}
  visit(context: Context) {
    return context.create(
      this.lvalue,
      this.rvalue ? this.rvalue.visit(context) : undefined,
      this.type
    );
  }
}
