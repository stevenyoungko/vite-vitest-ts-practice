import { describe, expect, it } from 'vitest';
import { clamp } from './';

describe('clamp', () => {
  it('should return the number if it is within the range', () =>
    expect(clamp(7, 0, 9)).toBe(7));

  it('should return the lower bound if the number is less than the lower bound', () =>
    expect(clamp(-12, -4, 5)).toBe(-4));

  it('should return the upper bound if the number is greater than the upper bound', () =>
    expect(clamp(18, 3, 9)).toBe(9));
});
