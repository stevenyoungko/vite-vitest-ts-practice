import { throttle } from '.';
import { describe, test, expect, vi } from 'vitest';

describe('throttle', () => {
  vi.useFakeTimers();

  test('should throttle a function', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 1000);

    throttled();
    throttled();
    throttled();
    throttled();

    expect(fn).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(1000);

    throttled();
    throttled();

    expect(fn).toHaveBeenCalledTimes(2);

    vi.advanceTimersByTime(1000);
    throttled();
    throttled();
    throttled();

    expect(fn).toHaveBeenCalledTimes(3);
  });
});
