export class ArrayWrapper {
  numbers: number[] = [];

  constructor(numbers: number[]) {
    this.numbers = numbers;
  }

  valueOf() {
    return this.numbers.reduce((acc, num) => acc + num, 0);
  }

  toString() {
    return `[${this.numbers.join(',')}]`;
  }
}
