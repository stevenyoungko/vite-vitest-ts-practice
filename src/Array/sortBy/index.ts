export function sortBy<T, K>(arr: T[], fn: (x: T) => K) {
  return arr.sort((a, b) => {
    const valA = fn(a);
    const valB = fn(b);

    if (valA < valB) {
      return -1;
    }
    if (valA > valB) {
      return 1;
    }
    return 0;
  });
}
