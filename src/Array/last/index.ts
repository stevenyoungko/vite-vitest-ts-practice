interface Array<T> {
  last(): T | number;
}

Array.prototype.last = function <T>(): T | number {
  if (!this.length) return -1;

  return this[this.length - 1];
};
