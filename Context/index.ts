import { Variable, DeclarationType } from '../interface';
import Let from './Let';
import Const from './Const';

/**
 * 存储上下文变量
 */
export default class Context {
  private variables = new Map<string, Variable>();
  constructor(private parentContext?: Context) {}
  get(key: string): any {
    if (this.variables.has(key)) {
      return this.variables.get(key)!.get();
    }
    if (this.parentContext) {
      return this.parentContext.get(key);
    }
    throw new Error(`${key} is not defined`);
  }
  set(key: string, newValue: any): void {
    if (this.variables.has(key)) {
      return this.variables.get(key)!.set(newValue);
    }
    if (this.parentContext) {
      return this.parentContext.set(key, newValue);
    }
    throw new Error(`${key} is not defined`);
  }
  create(key: string, value: any, type: DeclarationType) {
    switch (type) {
      case DeclarationType.const:
        this.variables.set(key, new Const(value));
        return;
      case DeclarationType.let:
        this.variables.set(key, new Let(value));
        return;
      default:
        throw new Error('unsupported declaration');
    }
  }
}
