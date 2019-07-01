const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote
} = require("./helpers");

const tokenize = input => {
  const tokens = [];
  let cursor = 0;

  while (cursor < input.length) {
    cursor++;
  }

  return tokens;
};

module.exports = { tokenize };
