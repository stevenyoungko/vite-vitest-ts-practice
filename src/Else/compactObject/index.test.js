import { describe, expect, test } from 'vitest';
import { compactObject } from './';

describe('compactObject', () => {
  test('compactObject should remove falsy values from an array', () => {
    const obj = [null, 0, false, 1];
    const result = compactObject(obj);
    expect(result).toEqual([1]);
  });
  test('compactObject should remove falsy values from an object', () => {
    const obj = { a: null, b: [false, 1] };
    const result = compactObject(obj);
    expect(result).toEqual({ b: [1] });
  });
});
