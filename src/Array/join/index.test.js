import { describe, expect, test } from 'vitest';
import { join } from './';

describe('Array join', () => {
  test('join', () => {
    const arr1 = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    const arr2 = [
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' },
    ];
    const expectedResult = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' },
    ];

    const result = join(arr1, arr2);

    expect(result).toEqual(expectedResult);
  });

  test('Test case 1: No common ids, directly merge arr1 and arr2', () => {
    const arr1 = [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ];
    const arr2 = [{ id: 3, x: 5 }];
    const expectedOutput = [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
      { id: 3, x: 5 },
    ];

    expect(join(arr1, arr2)).toEqual(expectedOutput);
  });

  test('Test case 2: Common ids present, merge and override with arr2', () => {
    const arr1 = [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ];
    const arr2 = [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ];
    const expectedOutput = [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ];

    expect(join(arr1, arr2)).toEqual(expectedOutput);
  });
});
