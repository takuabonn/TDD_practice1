export class Sugoroku {
  private troutArray: number[];
  private removedNumberCount: number = 0;
  constructor() {
    this.troutArray = [];
  }
  troutCountUpOrRemove(a: number): number[] {
    if (a < 4) {
      this.troutArray.push(a);
    }
    return this.troutArray;
  }

  getRemovedNumberCount() {
    return this.removedNumberCount + 1;
  }
}
