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
