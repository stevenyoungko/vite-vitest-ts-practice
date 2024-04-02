export function promiseRace<T>(promiseArray: Promise<T>[]): Promise<any> {
  if (!promiseArray.length) {
    throw new Error('No promise was passed');
  }

  return new Promise((resolve, reject) => {
    promiseArray.forEach((promiseItem) => {
      promiseItem
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

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
