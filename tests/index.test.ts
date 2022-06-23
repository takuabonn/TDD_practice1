import { Sugoroku } from "../src/index";
describe("双六ゲームテスト", () => {
  test("整数数列が一つの時&4以下の時に配列に値を追加", () => {
    const sugoroku = new Sugoroku();
    const result = sugoroku.troutCountUpOrRemove(1);
    expect(result[0]).toBe(1);
  });
});
