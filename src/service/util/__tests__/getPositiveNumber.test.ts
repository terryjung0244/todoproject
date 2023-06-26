import { getPositiveNumber } from "../getPositiveNumber";

describe("service/util/getPositiveNumber", () => {
  it("Result should get positive number", () => {
    const data = getPositiveNumber([-1, -2, 1, 2, 3]);
    expect(data).toStrictEqual([1, 2, 3]);
  });
});
