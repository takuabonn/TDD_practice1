export class Sugoroku {
  private troutArray: number[];
  private removedNumberCount: number = 0;
  constructor() {
    this.troutArray = [];
  }
  troutCountUpOrRemove(a: number) {
    if (a < 4) {
      this.troutArray.push(a);
    }

    if (a >= 4) {
      this.removedNumberCount = this.removedNumberCount + 1;
    }
  }

  getTroutArray() {
    return this.troutArray;
  }

  getRemovedNumberCount() {
    return this.removedNumberCount;
  }
}
