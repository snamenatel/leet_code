import { f } from "./../src/index";

const cases = [
  {
    arg: [],
    exp: []
  }
];

cases.forEach(({ arg, exp }) => {
  test(`${arg.toString()} expect ${exp.toString()}`, () => {
    expect(f(...arg)).toBe(exp);
  });
});
