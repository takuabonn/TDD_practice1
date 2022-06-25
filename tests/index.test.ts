import { Sugoroku } from "../src/index";

describe("整数数列 A がひとつの時", () => {
  test("整数数列が一つの時&4以下の時に配列に1を追加", () => {
    const sugoroku = new Sugoroku();
    sugoroku.troutCountUpOrRemove(1);
    expect(sugoroku.getTroutArray()[0]).toBe(1);
  });
  test("整数数列が一つの時&4以上の時に配列に値を追加しない&Pに1追加", () => {
    const sugoroku = new Sugoroku();
    sugoroku.troutCountUpOrRemove(4);
    expect(sugoroku.getTroutArray().length).toBe(0);
    expect(sugoroku.getRemovedNumberCount()).toBe(1);
  });
});

describe("整数数列 A が二つの時", () => {
  // A1が4以下かつA2が4以下の時
  test("A1,A2を配列にセット", () => {
    const sugoroku = new Sugoroku();
    sugoroku.troutCountUpOrRemove(1);
    sugoroku.troutCountUpOrRemove(2);

    expect(sugoroku.getTroutArray().length).toBe(2);
  });

  test("A1 の値に A2 をプラス", () => {
    const sugoroku = new Sugoroku();
    sugoroku.troutCountUpOrRemove(1);
    sugoroku.troutCountUpOrRemove(2);

    expect(sugoroku.getTroutArray()[0]).toBe(3);
  });

  test("プラスしてA1が4以上になる時配列から除外", () => {
    const sugoroku = new Sugoroku();
    sugoroku.troutCountUpOrRemove(1);
    sugoroku.troutCountUpOrRemove(3);

    expect(sugoroku.getRemovedNumberCount()).toBe(1);
  });

  // A1が4以下かつA2が4以上の時
  test("A2を配列にセットしないかつA1を配列から除外", () => {
    const sugoroku = new Sugoroku();
    sugoroku.troutCountUpOrRemove(1);
    sugoroku.troutCountUpOrRemove(4);

    expect(sugoroku.getTroutArray().length).toBe(0);
  });

  test("P = P + 2", () => {
    const sugoroku = new Sugoroku();
    sugoroku.troutCountUpOrRemove(1);
    sugoroku.troutCountUpOrRemove(4);

    expect(sugoroku.getRemovedNumberCount()).toBe(2);
  });
});

describe("整数数列 Aがn数の時", () => {
  test("Pが8になる", () => {
    const sugoroku = new Sugoroku();
    const An = [2, 2, 4, 1, 1, 1, 4, 2, 2, 1];

    An.forEach((value) => {
      sugoroku.troutCountUpOrRemove(value);
    });
    expect(sugoroku.getRemovedNumberCount()).toBe(8);
  });
});
