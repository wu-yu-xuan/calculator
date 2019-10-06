import { Node } from './interface';
import Context from './Context';

export default function Interpreter(node: Node, context: Context) {
  return node.visit(context);
}
