import { describe, expect, test } from 'vitest';
import { filter } from './';

describe('filter function tests', () => {
  test('should filter an array of numbers correctly', () => {
    const numbers = [1, 2, 3, 4, 5];
    const oddNumbers = filter(numbers, (n) => n % 2 !== 0);
    expect(oddNumbers).toEqual([1, 3, 5]);
  });

  test('should filter an array of strings based on length', () => {
    const strings = ['hello', 'react', 'angular', 'js', 'vitest'];
    const longStrings = filter(strings, (s) => s.length > 4);
    expect(longStrings).toEqual(['hello', 'react', 'angular', 'vitest']);
  });

  test('should handle empty arrays', () => {
    const emptyArray: number[] = [];
    const result = filter(emptyArray, (n) => n > 1);
    expect(result).toEqual([]);
  });

  test('should consider the index in the filter condition', () => {
    const numbers = [10, 20, 30, 40, 50];
    const indexGreaterThanTwo = filter(numbers, (n, i) => i > 2);
    expect(indexGreaterThanTwo).toEqual([40, 50]);
  });
});
