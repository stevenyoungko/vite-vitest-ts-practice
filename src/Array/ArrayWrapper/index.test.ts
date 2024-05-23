import { describe, expect, it } from 'vitest';
import { ArrayWrapper } from './';

describe('ArrayWrapper', () => {
  it('should return the sum of numbers when calling valueOf()', () => {
    const numbers = [1, 2, 3, 4, 5];
    const arrayWrapper = new ArrayWrapper(numbers);
    expect(arrayWrapper.valueOf()).toBe(15);
  });

  it('should return a string representation of the array when calling toString()', () => {
    const numbers = [1, 2, 3, 4, 5];
    const arrayWrapper = new ArrayWrapper(numbers);
    expect(arrayWrapper.toString()).toBe('[1,2,3,4,5]');
  });
});
