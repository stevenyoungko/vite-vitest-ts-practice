export function filter<T>(arr: T[], fn: (n: T, i: number) => boolean) {
  const result: T[] = [];

  for (const [index, item] of arr.entries()) {
    const filterValue = fn(item, index);
    if (filterValue) {
      result.push(item);
    }
  }

  return result;
}
