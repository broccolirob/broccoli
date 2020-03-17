const { isOpeningParenthesis, isClosingParenthesis } = require("./helpers");
const { pop } = require("./utilities");

const parenthesize = tokens => tokens;

const parse = tokens => {
  const token = pop(tokens);
  if (token.type === "Number") {
    return {
      type: "NumericLiteral",
      value: token.value
    };
  }
};

module.exports = { parse: tokens => parse(parenthesize(tokens)) };
