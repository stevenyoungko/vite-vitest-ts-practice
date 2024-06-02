import { describe, test, expect, vi, beforeEach } from 'vitest';
import { debounce } from './index';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  test('debounce function should delay the execution of the provided function', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 1000);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(mockFn).toHaveBeenCalledTimes(0);

    vi.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('debounce function should pass arguments to the debounced function', () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn('arg1', 'arg2');

    vi.advanceTimersByTime(501);

    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
  });
});
