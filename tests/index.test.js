import { largestPerimeter } from "../src/easy/largestPerimeterTriangle";
import { spiralMatrix } from "../src/easy/spiralMatrix";
import { largetsPerimeterTriangleCases, spiralMatrixCases } from "./easy.cases";
import { toBeTest, toStrictEqual } from "./helpres";

// toBeTest(largestPerimeter, largetsPerimeterTriangleCases);

toStrictEqual(spiralMatrix, spiralMatrixCases);
