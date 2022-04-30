import { arraySign } from "../src/easy/arraySign";
import { canMakeArithmeticProgression } from "../src/easy/canMakeArithmeticProgression";
// import { largestPerimeter } from "../src/easy/largestPerimeterTriangle";
import { nearestValidPoint } from "../src/easy/nearestValidPoint";
import { spiralMatrix } from "../src/easy/spiralMatrix";
import {
  arraySignCases,
  canMakeArithmeticProgressionCases,
  // largetsPerimeterTriangleCases,
  nearestValidPointCases,
  spiralMatrixCases
} from "./easy.cases";
import { toBeTest, toStrictEqual } from "./helpres";

// toBeTest(largestPerimeter, largetsPerimeterTriangleCases);

toStrictEqual(spiralMatrix, spiralMatrixCases);

toBeTest(nearestValidPoint, nearestValidPointCases);
toBeTest(arraySign, arraySignCases);
toBeTest(canMakeArithmeticProgression, canMakeArithmeticProgressionCases);
