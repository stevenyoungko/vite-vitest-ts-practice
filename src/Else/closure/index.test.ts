import { describe, expect, test } from 'vitest';
import { createHelloWorld } from './';

describe('createHelloWorld', () => {
  test('should return "Hello World" when called with no arguments', () => {
    const f = createHelloWorld();
    expect(f()).toBe('Hello World');
  });

  test('should return "Hello World" when called with any arguments', () => {
    const f = createHelloWorld();
    expect(f({}, null, 42)).toBe('Hello World');
  });
});
