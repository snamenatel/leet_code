import { hammingWeight } from "./../src/easy/numberOf1Bits";

// const cases = [
//   {
//     arg: [],
//     exp: []
//   }
// ];

const hammingWeightCases = [
  {
    arg: ["00000000000000000000000000001011"],
    exp: 3
  },
  {
    arg: ["00000000000000000000000010000000"],
    exp: 1
  },
  {
    arg: ["11111111111111111111111111111101"],
    exp: 31
  }
];

hammingWeightCases.forEach(({ arg, exp }) => {
  test(`${arg.toString()} expect ${exp.toString()}`, () => {
    expect(hammingWeight(...arg)).toBe(exp);
  });
});
