import { Node } from "./interface";

export default function Interpreter(node: Node) {
  return node.visit();
}
