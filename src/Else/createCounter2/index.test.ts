import { describe, expect, test, beforeEach } from 'vitest';
import { createCounter } from '.';

describe('createCounter', () => {
  let counter: any;

  beforeEach(() => {
    counter = createCounter(4);
  });

  test('should initialize with the given value', () => {
    expect(counter.get()).toBe(4);
  });

  test('should increment the counter', () => {
    expect(counter.increment()).toBe(5);
    expect(counter.increment()).toBe(6);
  });

  test('should get the current value', () => {
    counter.increment();
    counter.increment();
    expect(counter.get()).toBe(6);
  });

  test('should reset to the initial value', () => {
    counter.increment();
    counter.increment();
    counter.reset();
    expect(counter.get()).toBe(4);
  });

  test('should decrement the counter', () => {
    counter.increment();
    expect(counter.decrement()).toBe(4);
    expect(counter.decrement()).toBe(3);
  });
});
