import { Node } from '../interface';
import Context from '../Context';

/**
 * 变量
 */
export default class VariableNode implements Node {
  constructor(private key: string) {}
  visit(context: Context) {
    return context.get(this.key);
  }
}
