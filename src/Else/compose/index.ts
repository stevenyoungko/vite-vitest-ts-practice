type FunctionType<T> = (x: T) => T;

export function compose2<T>(fnArr: FunctionType<T>[]) {
  const reversedFunList = [...fnArr].reverse();

  return (x: T) => reversedFunList.reduce((sum, fn) => (sum = fn(sum)), x);
}

export function compose<T>(fnArr: FunctionType<T>[]) {
  return (x: T) => fnArr.reduceRight((sum, fn) => fn(sum), x);
}
