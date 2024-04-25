export function findIndex<T>(
  array: T[],
  predicate: (element: T) => boolean,
  fromIndex = 0
) {
  if (fromIndex < 0 || fromIndex > array.length) {
    return -1;
  }

  for (let i = fromIndex; i < array.length; i++) {
    if (predicate(array[i])) {
      return i;
    }
  }

  return -1;
}
