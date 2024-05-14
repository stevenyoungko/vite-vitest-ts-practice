export function once(fn: any) {
  let called = false;

  return function (...args: number[]) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
}
