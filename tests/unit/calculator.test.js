import { add, subtract, multiply, divide, power } from '../../src/calculator.js';

describe('Calculator - unit', () => {
  test('add works', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtract works', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiply works', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('divide works', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide by zero throws', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  test('power works', () => {
    expect(power(2, 3)).toBe(8);
  });
});
