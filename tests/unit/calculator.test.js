const { add, subtract, multiply, divide, power } = require('../../src/calculator.js');

describe('Calculator - unit', () => {
  test('add works', () => expect(add(2,3)).toBe(5));
  test('subtract works', () => expect(subtract(5,2)).toBe(3));
  test('multiply works', () => expect(multiply(4,3)).toBe(12));
  test('power works', () => expect(power(2,3)).toBe(8));
  test('divide works', () => expect(divide(10,2)).toBe(5));
  test('divide by zero throws', () => expect(() => divide(1,0)).toThrow('DivisionByZero'));
});
