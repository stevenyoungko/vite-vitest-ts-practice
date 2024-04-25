export function difference<T>(arr1: T[], arr2: T[]): T[] {
  const res: T[] = [];
  arr1.forEach((item) => {
    if (!arr2.includes(item)) {
      res.push(item);
    }
  });

  return res;
}

// example2
export const difference2 = <T>(arr1: T[], arr2: T[]): T[] =>
  arr1.filter((item) => !arr2.includes(item));
