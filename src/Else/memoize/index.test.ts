import { describe, expect, it } from 'vitest';
import { memoize } from '.';

describe('memoize', () => {
  it('should return the memoized result for the same arguments', () => {
    const add = (a: number, b: number) => a + b;
    const memoizedAdd = memoize(add);

    // First call
    const result1 = memoizedAdd(2, 3);
    expect(result1).toBe(5);

    // Second call with the same arguments
    const result2 = memoizedAdd(2, 3);
    expect(result2).toBe(5);

    // Third call with different arguments
    const result3 = memoizedAdd(4, 5);
    expect(result3).toBe(9);
  });

  it('should work with different argument types', () => {
    const concat = (a: string, b: string) => a + b;
    const memoizedConcat = memoize(concat);

    // First call
    const result1 = memoizedConcat('Hello', 'World');
    expect(result1).toBe('HelloWorld');

    // Second call with the same arguments
    const result2 = memoizedConcat('Hello', 'World');
    expect(result2).toBe('HelloWorld');

    // Third call with different arguments
    const result3 = memoizedConcat('Goodbye', 'World');
    expect(result3).toBe('GoodbyeWorld');
  });
});
