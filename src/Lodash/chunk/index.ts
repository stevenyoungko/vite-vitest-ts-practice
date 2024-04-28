export function chunk(arr: number[], size: number) {
  let result: number[][] = [];
  let count = 1;

  if (size <= 0 || arr.length < size || Number.isNaN(size)) {
    return [];
  }

  arr.forEach((item, index) => {
    if ((index + 1) % size === 0) {
      result.push(arr.slice(index - size + 1, size * count));
      count += 1;
    }
  });

  const remainder = arr.length % size;
  if (remainder !== 0) {
    result.push(arr.slice(-remainder));
  }

  return result;
}

export function chunk2(array: number[], size: number) {
  const chunkedArray = [];

  if (size <= 0 || array.length < size || Number.isNaN(size)) {
    return [];
  }

  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }

  return chunkedArray;
}
