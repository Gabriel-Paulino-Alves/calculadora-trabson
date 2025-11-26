function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  if (Number(b) === 0) throw new Error('DivisionByZero');
  return Number(a) / Number(b);
}

function power(a, b) {
  return Math.pow(Number(a), Number(b));
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power
};
