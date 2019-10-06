import { Node } from "../interface";

/**
 * 数字结点
 */
export default class NumberNode implements Node {
  constructor(private value: number) {}
  visit() {
    return this.value;
  }
}
