export function createCounter(initialValue: number = 0) {
  let result: number = initialValue;

  return {
    get() {
      return result;
    },
    increment() {
      return (result += 1);
    },
    reset() {
      result = initialValue;
      return result;
    },
    decrement() {
      return (result -= 1);
    },
  };
}
