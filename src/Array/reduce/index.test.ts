import { describe, expect, test } from 'vitest';
import { reduce } from './';

describe('Array.reduce', () => {
  test('測試案例一：累加函數', () => {
    const nums = [1, 2, 3, 4];
    function sum(acc: number, cur: number) {
      return acc + cur;
    }
    const init = 0;
    const expectedResult = 10;
    const result = reduce(nums, sum, init);
    expect(result).toBe(expectedResult);
  });

  test('測試案例二：加總平方函數', () => {
    const nums = [1, 2, 3, 4];
    function sumOfSquares(acc: number, cur: number) {
      return acc + cur * cur;
    }
    const init = 100;
    const expectedResult = 130;
    const result = reduce(nums, sumOfSquares, init);
    expect(result).toBe(expectedResult);
  });
});
