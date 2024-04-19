type PromiseFn<T> = () => Promise<T>;

export function promiseAll<T>(promiseFunctions: PromiseFn<T>[]) {
  if (promiseFunctions.length === 0) {
    return [];
  }

  const results: T[] = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    promiseFunctions.forEach((promiseItem, index) => {
      promiseItem()
        .then((res) => {
          results[index] = res;
          counter += 1;
          if (counter === promiseFunctions.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
