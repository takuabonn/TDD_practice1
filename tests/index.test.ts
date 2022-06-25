import { Batters } from "../src/index";

describe("整数数列 A がひとつの時", () => {
  test("整数数列が一つの時&4以下の時に配列に1を追加", () => {
    const batters = new Batters();
    batters.troutCountUpOrRemove(1);
    expect(batters.getTroutArray()[0]).toBe(1);
  });
  test("整数数列が一つの時&4以上の時に配列に値を追加しない&Pに1追加", () => {
    const batters = new Batters();
    batters.troutCountUpOrRemove(4);
    expect(batters.getTroutArray().length).toBe(0);
    expect(batters.getRemovedNumberCount()).toBe(1);
  });
});

describe("整数数列 A が二つの時", () => {
  // A1が4以下かつA2が4以下の時
  test("A1,A2を配列にセット", () => {
    const batters = new Batters();
    batters.troutCountUpOrRemove(1);
    batters.troutCountUpOrRemove(2);

    expect(batters.getTroutArray().length).toBe(2);
  });

  test("A1 の値に A2 をプラス", () => {
    const batters = new Batters();
    batters.troutCountUpOrRemove(1);
    batters.troutCountUpOrRemove(2);

    expect(batters.getTroutArray()[0]).toBe(3);
  });

  test("プラスしてA1が4以上になる時配列から除外", () => {
    const batters = new Batters();
    batters.troutCountUpOrRemove(1);
    batters.troutCountUpOrRemove(3);

    expect(batters.getRemovedNumberCount()).toBe(1);
  });

  // A1が4以下かつA2が4以上の時
  test("A2を配列にセットしないかつA1を配列から除外", () => {
    const batters = new Batters();
    batters.troutCountUpOrRemove(1);
    batters.troutCountUpOrRemove(4);

    expect(batters.getTroutArray().length).toBe(0);
  });

  test("P = P + 2", () => {
    const batters = new Batters();
    batters.troutCountUpOrRemove(1);
    batters.troutCountUpOrRemove(4);

    expect(batters.getRemovedNumberCount()).toBe(2);
  });
});

describe("整数数列 Aがn数の時", () => {
  test("Pが8になる", () => {
    const batters = new Batters();
    const An = [2, 2, 4, 1, 1, 1, 4, 2, 2, 1];

    An.forEach((value) => {
      batters.troutCountUpOrRemove(value);
    });
    expect(batters.getRemovedNumberCount()).toBe(8);
  });
});
