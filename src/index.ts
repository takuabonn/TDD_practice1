export class Sugoroku {
  private troutArray: number[];
  private removedNumberCount: number = 0;
  constructor() {
    this.troutArray = [];
  }
  troutCountUpOrRemove(a: number) {
    this.troutArray.push(a);
    const newArray: number[] = [];
    this.troutArray.forEach((value, index) => {
      let newValue = value;
      if (this.troutArray.length - 1 !== index) {
        newValue = newValue + a;
      }

      if (newValue < 4) {
        newArray.push(newValue);
        return;
      }
      if (newValue >= 4) {
        this.removedNumberCount = this.removedNumberCount + 1;
      }
    });
    this.troutArray = newArray;
  }

  private isLimit(num: number) {
    if (num < 4) {
      return false;
    }
    return true;
  }

  getTroutArray() {
    return this.troutArray;
  }

  getRemovedNumberCount() {
    return this.removedNumberCount;
  }
}
