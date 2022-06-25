export class Sugoroku {
  private troutArray: number[];
  private removedNumberCount: number = 0;
  constructor() {
    this.troutArray = [];
  }
  troutCountUpOrRemove(a: number) {
    if (a < 4) {
      const newArray: number[] = [];
      this.troutArray.forEach((value, index) => {
        const newValue = value + a;
        if (newValue < 4) {
          newArray.push(newValue);
          return;
        }
        this.removedNumberCount = this.removedNumberCount + 1;
      });
      this.troutArray = newArray;
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
