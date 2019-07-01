const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ["+", "-", "*", "/", "%"];

const isLetter = char => LETTER.test(char);

const isWhitespace = char => WHITESPACE.test(char);

const isNumber = char => NUMBER.test(char);

const isOpeningParenthesis = char => char === "(";

const isClosingParenthesis = char => char === ")";

const isParenthesis = char =>
  isOpeningParenthesis(char) || isClosingParenthesis(char);

const isQuote = char => char === '"';

const isOperator = char => OPERATORS.includes(char);

module.exports = {
  isLetter,
  isWhitespace,
  isNumber,
  isOpeningParenthesis,
  isClosingParenthesis,
  isParenthesis,
  isQuote,
  isOperator
};
