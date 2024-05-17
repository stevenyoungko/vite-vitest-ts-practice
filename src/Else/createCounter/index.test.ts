import { describe, expect, test } from 'vitest';
import { createCounter } from './';

describe('createCounter', () => {
  test('counter starts at 0 when no initial value is provided', () => {
    const counter = createCounter();
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
  });

  test('counter starts at the provided initial value of 10', () => {
    const counter = createCounter(10);
    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
  });
});
