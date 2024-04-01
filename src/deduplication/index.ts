export function deduplication(arr: number[]) {
  const res: number[] = [];
  arr.forEach((item: number) => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });
  return res;
}

export function deduplicationWithReduce(arr: number[]) {
  return arr.reduce((acc: number[], item: number) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }

    return acc;
  }, []);
}

export function deduplicationWithSet(arr: number[]) {
  return [...new Set(arr)];
}

export function deduplicationWithObject(arr: number[]) {
  const obj: { [key: number]: boolean } = {};

  return arr.reduce((acc: number[], item: number) => {
    if (!obj[item]) {
      acc.push(item);
      obj[item] = true;
    }

    return acc;
  }, []);
}
