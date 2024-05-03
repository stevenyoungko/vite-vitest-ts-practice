export function customExpect<T>(val: T) {
  return {
    toBe(expect: T) {
      if (val === expect) {
        return true;
      } else {
        throw new Error('Not Equal');
      }
    },
    notToBe(expect: T) {
      if (val !== expect) {
        return true;
      } else {
        throw new Error('Equal');
      }
    },
  };
}
