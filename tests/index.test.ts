import { Sugoroku } from "../src/index";
describe("双六ゲームテスト", () => {
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
