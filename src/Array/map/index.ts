export const map = <T, R>(
  array: T[],
  fn: (element: T, index?: number, array?: T[]) => R
): R[] => {
  const result: R[] = [];

  for (let [idx, ele] of array.entries()) {
    result.push(fn(ele, idx, array));
  }

  return result;
};
