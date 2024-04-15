import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { repeat } from './';

describe('repeat function with interval', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('basic repeat function', () => {
    it('should get correct called times after repeat', () => {
      // spy on the func
      const func = vi.fn(console.log);
      const times = 3;
      const duration = 5000;
      const str = 'codefarmer.tw';

      const repeatFunc = repeat(func, times, duration);
      repeatFunc(str);

      // wait for the cancel to be called with fake timers
      vi.advanceTimersByTime(duration * times + 100);

      expect(func).toHaveBeenCalledTimes(3);
      expect(func).toHaveBeenNthCalledWith(1, str);
      expect(func).toHaveBeenNthCalledWith(2, str);
      expect(func).toHaveBeenNthCalledWith(3, str);
    });
  });
});
