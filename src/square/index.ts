interface Array<T> {
  square(): number[];
}

Array.prototype.square = function (this: number[]): number[] {
  return this.map((item) => item * item);
};
