import { describe, expect, test } from 'vitest';
import './';

describe('Array groupBy', () => {
  test('should group array elements based on the provided key function', () => {
    const arr = [{ id: '1' }, { id: '1' }, { id: '2' }];
    const fn = function (item) {
      return item.id;
    };

    const result = arr.groupBy(fn);

    expect(result).toEqual({
      1: [{ id: '1' }, { id: '1' }],
      2: [{ id: '2' }],
    });
  });
});
