export function createCounter(initialValue: number = 0) {
  let sum = initialValue - 1;

  return function () {
    return (sum += 1);
  };
}
