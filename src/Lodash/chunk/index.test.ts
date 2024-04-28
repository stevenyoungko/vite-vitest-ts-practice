import { describe, expect, test } from 'vitest';
import { chunk } from './';

const basicCases = [
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    size: 3,
    expected: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]],
  },
  {
    input: [1, 2, 3, 4, 5, 6],
    size: 1,
    expected: [[1], [2], [3], [4], [5], [6]],
  },
];

const edgeCases = [
  {
    input: [1, 2, 3],
    size: 0,
    expected: [],
  },
  {
    input: [1, 2, 3, 4, 5],
    size: 6,
    expected: [],
  },
  {
    input: [1, 2, 3],
    size: -1,
    expected: [],
  },
  {
    input: [],
    size: 1,
    expected: [],
  },
  {
    input: [1, 2, 3],
    size: NaN,
    expected: [],
  },
];

describe('lodash.chunk', () => {
  test.each(basicCases)(
    'should pass basic test cases - %s',
    ({ input, size, expected }) => {
      const result = chunk(input, size);

      expect(result).toEqual(expected);
      expect(result).not.toBe(input);
    }
  );

  test.each(edgeCases)(
    'should pass edge cases - %s',
    ({ input, size, expected }) => {
      const result = chunk(input, size);

      expect(result).toEqual(expected);
      expect(result).not.toBe(input);
    }
  );
});
