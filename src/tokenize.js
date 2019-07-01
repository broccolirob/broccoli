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
    const char = input[cursor];

    if (isParenthesis(char)) {
      tokens.push({
        type: "Parenthesis",
        value: char
      });
      cursor++;
      continue;
    }

    if (isWhitespace(char)) {
      cursor++;
      continue;
    }

    if (isNumber(char)) {
      tokens.push({
        type: "Number",
        value: parseInt(char, 10)
      });
      cursor++;
      continue;
    }

    if (isLetter(char)) {
      tokens.push({
        type: "Name",
        value: char
      });
      cursor++;
      continue;
    }

    throw new Error(`${char} is not a valid character`);
  }

  return tokens;
};

module.exports = { tokenize };
