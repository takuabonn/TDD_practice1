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
      if (newValue >= 4) {
        this.removedNumberCount = this.removedNumberCount + 1;
        return;
      }
      newArray.push(newValue);
    });
    this.troutArray = newArray;
  }

  getTroutArray() {
    return this.troutArray;
  }

  getRemovedNumberCount() {
    return this.removedNumberCount;
  }
}
