## 問題

[問題](https://atcoder.jp/contests/abc256/tasks/abc256_b)

## Todo

１整数数列 A がひとつの時

- [x] 整数が 4 未満の時配列にセット
- [x] 整数が 4 以上の時配列にセットしないかつ P にプラス１

2 整数数列 A が二つの時

- [x] A1 が 4 以下かつ A2 が 4 以下の時

  - [x] A １,A2 を配列にセット
  - [x] A1 の値に A2 をプラス
  - [x] A1 が 4 以上になる時配列から除外かつ P にプラス１
  - [x] A1 が 4 以下の時はそのまま

- [x] A1 が 4 以下かつ A2 が 4 以上の時
  - [x] 配列に A2 をセットしない
  - [x] 配列から A1 を除外
  - [x] P = P + 2

3 整数数列 A が n 数の時(2 2 4 1 1 1 4 2 2 1)

- [x] P が 8 になる
