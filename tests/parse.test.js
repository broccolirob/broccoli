const { parse } = require("../src/parse");

describe(parse, () => {
  it("should return a token with the type of NumericLiteral for number tokens", () => {
    const tokens = [{ type: "Number", value: 2 }];
    const ast = { type: "NumericLiteral", value: 2 };

    expect(parse(tokens)).toEqual(ast);
  });

  it("should return a token with the type of StringLiteral for string tokens", () => {
    const tokens = [{ type: "String", value: "hello" }];
    const ast = { type: "StringLiteral", value: "hello" };

    expect(parse(tokens)).toEqual(ast);
  });

  it("should return a token with the type of NumericLiteral for number tokens", () => {
    const tokens = [{ type: "Name", value: "x" }];
    const ast = { type: "Identifier", name: "x" };

    expect(parse(tokens)).toEqual(ast);
  });
});
