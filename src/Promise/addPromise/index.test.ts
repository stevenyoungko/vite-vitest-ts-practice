import { describe, expect, it } from 'vitest';
import { addPromises2 } from './index';
import { PROMISE_STATE, sleep } from '../../utils/sleep';

describe('addPromises2', function () {
  it('should resolve with the sum of the resolved values of the two promises', async function () {
    const promise1 = sleep({
      duration: 10,
      value: 1,
      state: PROMISE_STATE.FULFILLED,
    });
    const promise2 = sleep({
      duration: 20,
      value: 2,
      state: PROMISE_STATE.FULFILLED,
    });
    const result = await addPromises2([promise1, promise2]);
    expect(result).toBe(3);
  });

  it('should reject if either of the promises rejects', async function () {
    const promise1 = sleep({
      duration: 10,
      value: 1,
      state: PROMISE_STATE.FULFILLED,
    });
    const promise2 = sleep({
      duration: 20,
      value: 2,
      state: PROMISE_STATE.REJECTED,
    });

    const result = await addPromises2([promise1, promise2]);
    expect(result).toBe(1);
  });

  it('should resolve the sum with resolved promises', async function () {
    const promise1 = sleep({
      duration: 10,
      value: 1,
      state: PROMISE_STATE.FULFILLED,
    });
    const promise2 = sleep({
      duration: 20,
      value: 2,
      state: PROMISE_STATE.REJECTED,
    });
    const promise3 = sleep({
      duration: 30,
      value: 3,
      state: PROMISE_STATE.REJECTED,
    });
    const promise4 = sleep({
      duration: 40,
      value: 5565,
      state: PROMISE_STATE.FULFILLED,
    });

    const result = await addPromises2([promise1, promise2, promise3, promise4]);
    expect(result).toBe(5566);
  });
});
