export function repeat<T, R>(
  func: (str: T) => R,
  times: number,
  duration: number
) {
  let count = 0;
  let intervalId: number | null = null;

  const output = function (str: T) {
    intervalId = setInterval(() => {
      count += 1;
      func(str);
      if (count === times && intervalId) {
        clearInterval(intervalId);
      }
    }, duration);
  };

  return output;
}
