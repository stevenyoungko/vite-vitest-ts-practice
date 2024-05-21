import { describe, expect, it } from 'vitest';
import { isEmpty } from './';

describe('isEmpty', function () {
  it('should return true for an empty object', function () {
    const obj = {};
    const result = isEmpty(obj);
    expect(result).toBe(true);
  });

  it('should return false for an object with properties', function () {
    const obj = { name: 'John', age: 30 };
    const result = isEmpty(obj);
    expect(result).toBe(false);
  });

  it('should return true for an empty array', function () {
    const arr: any = [];
    const result = isEmpty(arr);
    expect(result).toBe(true);
  });

  it('should return false for an array with elements', function () {
    const arr = [1, 2, 3];
    const result = isEmpty(arr);
    expect(result).toBe(false);
  });

  it('should return false for a string', function () {
    const str = 'Hello';
    const result = isEmpty(str);
    expect(result).toBe(false);
  });

  it('should return true for an empty string', function () {
    const str = '';
    const result = isEmpty(str);
    expect(result).toBe(true);
  });
});
