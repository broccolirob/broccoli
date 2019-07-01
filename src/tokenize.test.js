const { tokenize } = require("./tokenize");

describe("tokenize", () => {
  it("should return an array", () => {
    expect(Array.isArray(tokenize(""))).toBe(true);
  });
});
