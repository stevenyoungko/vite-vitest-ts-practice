export enum PROMISE_STATE {
  PENDING = 'PENDING',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

interface SleepProps<T> {
  duration: number;
  value: T;
  state: PROMISE_STATE;
}

export function sleep<T>({
  duration,
  value,
  state,
}: SleepProps<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === PROMISE_STATE.FULFILLED) {
        resolve(value);
      } else {
        reject(value);
      }
    }, duration);
  });
}
