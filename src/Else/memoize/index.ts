export function memoize(fn: any) {
  const cache: { [key: string]: number } = {};
  return function (...args: any[]) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const res = fn(...args);
    cache[key] = res;
    return res;
  };
}
