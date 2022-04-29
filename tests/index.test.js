import { largestPerimeter } from "../src/easy/largestPerimeterTriangle";
import { nearestValidPoint } from "../src/easy/nearestValidPoint";
import { spiralMatrix } from "../src/easy/spiralMatrix";
import {
  largetsPerimeterTriangleCases,
  nearestValidPointCases,
  spiralMatrixCases
} from "./easy.cases";
import { toBeTest, toStrictEqual } from "./helpres";

// toBeTest(largestPerimeter, largetsPerimeterTriangleCases);

toStrictEqual(spiralMatrix, spiralMatrixCases);

toBeTest(nearestValidPoint, nearestValidPointCases);
