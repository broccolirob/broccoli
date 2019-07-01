const { tokenize } = require("./tokenize");

describe("tokenize", () => {
  it("should return an array", () => {
    expect(Array.isArray(tokenize(""))).toBe(true);
  });

  it("should be able to tokenize a pair of parentheses", () => {
    const input = "()";
    const result = [
      { type: "Parenthesis", value: "(" },
      { type: "Parenthesis", value: ")" }
    ];

    expect(tokenize(input)).toEqual(result);
  });

  it("should ignore whitespace", () => {
    const input = "       ";
    expect(tokenize(input)).toEqual([]);
  });

  it("should correctly tokenize a single digit", () => {
    const input = "2";
    const result = [{ type: "Number", value: 2 }];

    expect(tokenize(input)).toEqual(result);
  });

  it("should be able to handle single numbers in expressions", () => {
    const input = "(1 2)";

    const result = [
      { type: "Parenthesis", value: "(" },
      { type: "Number", value: 1 },
      { type: "Number", value: 2 },
      { type: "Parenthesis", value: ")" }
    ];

    expect(tokenize(input)).toEqual(result);
  });

  it("should be able to handle single letters in expressions", () => {
    const input = "(a b)";

    const result = [
      { type: "Parenthesis", value: "(" },
      { type: "Name", value: "a" },
      { type: "Name", value: "b" },
      { type: "Parenthesis", value: ")" }
    ];

    expect(tokenize(input)).toEqual(result);
  });
});
