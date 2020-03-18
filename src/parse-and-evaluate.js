const { tokenize } = require("./tokenize");
const { parse } = require("./parse");
const { transform } = require("./transform");
const { evaluate } = require("./evaluate");
const { pipe } = require("./utilities");

const parseAndEvaluate = pipe(tokenize, parse, evaluate);

module.exports = { parseAndEvaluate };
