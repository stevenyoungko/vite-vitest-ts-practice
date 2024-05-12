import { describe, expect, test } from 'vitest'; // Import the sortBy function
import { sortBy } from './index';

describe('sortBy', () => {
  test('should sort an array of numbers in ascending order', () => {
    const arr = [5, 2, 8, 1, 3];
    const sortedArr = sortBy(arr, (x: number) => x as number);
    expect(sortedArr).toEqual([1, 2, 3, 5, 8]);
  });

  test('should sort an array of strings in alphabetical order', () => {
    const arr = ['banana', 'apple', 'orange', 'grape'];
    const sortedArr = sortBy(arr, (x: string) => (x as string).charCodeAt(0));
    expect(sortedArr).toEqual(['apple', 'banana', 'grape', 'orange']);
  });

  test('should preserve the original array when empty array is passed', () => {
    const arr: number[] = [];
    const sortedArr = sortBy(arr, (x: number) => x as number);
    expect(sortedArr).toEqual([]);
  });

  test('should sort an array of objects based on a specific property value in ascending order', () => {
    const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
    const sortedArr = sortBy(arr, (d: { x: number }) => d.x as number);
    expect(sortedArr).toEqual([{ x: -1 }, { x: 0 }, { x: 1 }]);
  });
});
