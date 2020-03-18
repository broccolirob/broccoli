const pipe = (...funcs) => value =>
  funcs.reduce((value, func) => func(value), value);
const pop = array => array.shift();
const peek = array => array[0];

module.exports = { pop, peek, pipe };
