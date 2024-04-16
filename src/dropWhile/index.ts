export function dropWhile<T>(array: T[], predicate: (val: T) => boolean): T[] {
  let result: T[] = [];
  let isOpen = false;
  for (const ele of array) {
    if (!predicate(ele) || isOpen) {
      isOpen = true;
      result.push(ele);
    }
  }

  return result;
}

// example2
export function dropWhile2<T>(array: T[], predicate: (val: T) => boolean): T[] {
  let result: T[] = [];
  for (const [index, ele] of array.entries()) {
    if (!predicate(ele)) {
      result = array.slice(index);
      break;
    }
  }

  return result;
}
