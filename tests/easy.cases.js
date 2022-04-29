export const largetsPerimeterTriangleCases = [
  {
    arg: [[2, 1, 2]],
    exp: 5
  }
];

export const spiralMatrixCases = [
  {
    arg: [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
    ],
    exp: [1, 2, 3, 6, 9, 8, 7, 4, 5]
  },
  {
    arg: [[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]],
    exp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    arg: [[[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]],
    exp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
];

export const nearestValidPointCases = [
  {
    arg: [
      3,
      4,
      [
        [1, 2],
        [3, 1],
        [2, 4],
        [2, 3],
        [4, 4]
      ]
    ],
    exp: 2
  },
  {
    arg: [3, 4, [[3, 4]]],
    exp: 0
  },
  {
    arg: [3, 4, [[2, 3]]],
    exp: -1
  }
];
