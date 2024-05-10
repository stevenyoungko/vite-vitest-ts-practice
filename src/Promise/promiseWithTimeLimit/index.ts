type InputPromiseFn<T extends unknown[], R> = (...args: T) => Promise<R>;

export function promiseWithTimeLimit<T extends unknown[], R>(
  fn: InputPromiseFn<T, R>,
  t: number
) {
  return (...args: T) => {
    return new Promise((resolve, reject) => {
      const startTime = performance.now();
      const timeOutId = setTimeout(() => {
        reject({
          rejected: 'Time Limit Exceeded',
          time: Math.ceil(performance.now() - startTime),
        });
      }, t);

      fn(...args).then((res) => {
        clearTimeout(timeOutId);
        resolve({
          resolved: res,
          time: Math.ceil(performance.now() - startTime),
        });
      });
    });
  };
}
