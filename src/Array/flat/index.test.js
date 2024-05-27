import { describe, expect, test } from 'vitest';
import { flat } from './';

describe('Array flat', () => {
  test('should flatten a nested array by one level', () => {
    const arr = [1, [2, 3], [4, [5]]];
    const result = flat(arr, 1);
    expect(result).toEqual([1, 2, 3, 4, [5]]);
  });

  test('should flatten a nested array by two levels', () => {
    const arr = [1, [2, 3], [4, [5]]];
    const result = flat(arr, 2);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should flatten a deeply nested array by three levels', () => {
    const arr = [1, [2, [3, [4, [5]]]]];
    const result = flat(arr, 3);
    expect(result).toEqual([1, 2, 3, 4, [5]]);
  });

  test('should return the original array when n is 0', () => {
    const arr = [1, [2, 3], [4, [5]]];
    const result = flat(arr, 0);
    expect(result).toEqual(arr);
  });

  test('should return an empty array when the input array is empty', () => {
    const arr = [];
    const result = flat(arr, 1);
    expect(result).toEqual([]);
  });
});
