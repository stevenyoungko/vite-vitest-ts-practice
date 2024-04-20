export function dropRightWhile<T>(array: T[], predicate: (item: T) => boolean) {
  let result: T[] = [];

  for (let i = array.length - 1; i >= 0; i--) {
    if (!predicate(array[i])) {
      result.push(...array.slice(0, i + 1));
      break;
    }
  }

  return result;
}
