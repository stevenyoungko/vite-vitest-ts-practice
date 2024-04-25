export function addPromises(
  promise1: Promise<number>,
  promise2: Promise<number>
): Promise<number> {
  return new Promise((resolve, reject) => {
    Promise.all([promise1, promise2])
      .then(([res1, res2]) => resolve(res1 + res2))
      .catch((error) => reject(error));
  });
}

export function addPromises2(promise: Promise<number>[]) {
  return new Promise((resolve, reject) => {
    Promise.allSettled(promise)
      .then((res) => {
        let result = res
          .filter((item) => item.status === 'fulfilled')
          .reduce(
            (acc, item) => acc + (item as PromiseFulfilledResult<number>).value,
            0
          );

        resolve(result);
      })
      .catch((error) => reject(error));
  });
}
