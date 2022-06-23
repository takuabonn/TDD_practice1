export class Sugoroku {
  private troutArray: number[];
  constructor() {
    this.troutArray = [];
  }
  troutCountUpOrRemove(a: number): number[] {
    this.troutArray.push(a);
    return this.troutArray;
  }
}
