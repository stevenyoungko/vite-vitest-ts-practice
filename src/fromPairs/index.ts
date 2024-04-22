export function fromPairs<T>(arr: T[][]) {
  return arr.reduce((acc: { [key: string]: T }, item) => {
    if (item.length < 2) {
      return acc;
    }

    const [key, value] = item;

    if (typeof key === 'string') {
      acc[key] = value;
    }

    if (typeof key === 'number') {
      acc[key.toString()] = value;
    }

    return acc;
  }, {});
}
