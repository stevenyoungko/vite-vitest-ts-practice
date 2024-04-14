import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { cancelableInterval } from './';

describe('cancelableTimeout', function () {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should get correct interval output and called times after fn is cancelled', () => {
    // spy on the fn function
    const fn = vi.fn((x: number) => x * 2);
    const args = [4];
    const t = 35;

    const cancelTimeMs = 190;
    const { cancel, output } = cancelableInterval<number[], number>(
      fn,
      args,
      t
    );
    setTimeout(cancel, cancelTimeMs);

    // wait for the cancel to be called with fake timers
    vi.advanceTimersByTime(cancelTimeMs * 2);

    // assert the output
    expect(output).toEqual([
      { time: 0, returned: 8 },
      { time: 35, returned: 8 },
      { time: 70, returned: 8 },
      { time: 105, returned: 8 },
      { time: 140, returned: 8 },
      { time: 175, returned: 8 },
    ]);

    // assert the fn should be called 6 times
    expect(fn).toHaveBeenCalledTimes(6);
  });
});
