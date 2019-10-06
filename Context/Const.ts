import { Variable } from '../interface';

export default class Const implements Variable {
  constructor(private value: any) {}
  set(newValue: any) {
    throw new Error('could not assign to constant variable');
  }
  get() {
    return this.value;
  }
}
