import { add, subtract, divide, multiply } from './math';

describe('calculator', () => {
  describe('addition', () => {
    test('add adds numbers correctly', () => {
      expect(add(1, 2)).toBe(3);
    });

    test('adds negative numbers correctly', () => {
      expect(add(-1, -2)).toBe(-3);
    });
  });

  describe('subtraction', () => {
    test('subtract subtracts numbers correctly', () => {
      expect(subtract(2, 1)).toBe(1);
    });

    test('subtracts negative numbers correctly', () => {
      expect(subtract(-2, -1)).toBe(-1);
    });
  });

  describe('multiplication', () => {
    test('multiply multiplies numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('multiplies negative numbers correctly', () => {
      expect(multiply(-2, -3)).toBe(6);
    });
  });

  describe('division', () => {
    test('divide divides numbers correctly', () => {
      expect(divide(6, 3)).toBe(2);
    });

    test('divides negative numbers correctly', () => {
      expect(divide(-6, -3)).toBe(2);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
    });
  });
});
