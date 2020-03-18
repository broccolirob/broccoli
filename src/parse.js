const { isOpeningParenthesis, isClosingParenthesis } = require("./helpers");
const { pop, peek } = require("./utilities");

const parenthesize = tokens => tokens;

const parse = tokens => {
  const token = pop(tokens);

  if (token.type === "Number") {
    return {
      type: "NumericLiteral",
      value: token.value
    };
  }

  if (token.type === "String") {
    return {
      type: "StringLiteral",
      value: token.value
    };
  }

  if (token.type === "Name") {
    return {
      type: "Identifier",
      name: token.value
    };
  }
};

module.exports = { parse: tokens => parse(parenthesize(tokens)) };
