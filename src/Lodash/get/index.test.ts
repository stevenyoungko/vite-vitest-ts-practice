import { describe, it, expect } from 'vitest';
import { get } from './';

describe('get function tests', () => {
  const object = { a: [{ b: { c: 3 } }] };

  it('should return 3 for path "a[0].b.c"', () => {
    const result = get(object, 'a[0].b.c');
    expect(result).toBe(3);
  });

  it('should return 3 for path "a[0][b][c]"', () => {
    const result = get(object, 'a[0][b][c]');
    expect(result).toBe(3);
  });

  it('should return "default" for non-existing path with default value', () => {
    const result = get(object, 'a[100].b.c', 'default');
    expect(result).toBe('default');
  });

  it('should return undefined for non-existing path without default value', () => {
    const result = get(object, 'a[100].b.c');
    expect(result).toBeUndefined();
  });
});
