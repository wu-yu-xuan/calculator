import { Variable } from '../interface';

export default class Let implements Variable {
  constructor(private value: any) {}
  set(newValue: any) {
    this.value = newValue;
  }
  get() {
    return this.value;
  }
}
