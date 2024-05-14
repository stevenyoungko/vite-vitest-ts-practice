// 請確保已安裝 vitest 和 jest 庫

import { describe, expect, it } from 'vitest';
import { once } from '.';

describe('once function', () => {
  it('should return the correct value when called once', () => {
    const fn = (a: number, b: number, c: number) => a + b + c;
    const onceFn = once(fn);

    const result = onceFn(1, 2, 3);

    expect(result).toBe(6);
  });

  it('should return undefined when called more than once', () => {
    const fn = (a: number, b: number, c: number) => a + b + c;
    const onceFn = once(fn);

    onceFn(1, 2, 3); // Call once
    const result = onceFn(2, 3, 6); // Call again

    expect(result).toBe(undefined);
  });

  it('should return the correct value for multiple arguments when called once', () => {
    const fn = (a: number, b: number, c: number) => a * b * c;
    const onceFn = once(fn);

    const result = onceFn(5, 7, 4);

    expect(result).toBe(140);
  });

  it('should return undefined for multiple arguments when called more than once', () => {
    const fn = (a: number, b: number, c: number) => a * b * c;
    const onceFn = once(fn);

    onceFn(5, 7, 4); // Call once
    const result1 = onceFn(2, 3, 6); // Call again
    const result2 = onceFn(4, 6, 8); // Call again

    expect(result1).toBe(undefined);
    expect(result2).toBe(undefined);
  });
});
