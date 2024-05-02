export enum ACTION_ENUM {
  ADD = 'add',
  SUBTRACT = 'subtract',
  MULTIPLY = 'multiply',
  DIVIDE = 'divide',
  POWER = 'power',
  GET_RESULT = 'getResult',
}

export class Calculator {
  result: number = 0;

  constructor(initValue: number) {
    this.result = initValue;
  }

  add(value: number) {
    this.result += value;
    return this;
  }

  subtract(value: number) {
    this.result -= value;
    return this;
  }

  multiply(value: number) {
    this.result *= value;
    return this;
  }

  divide(value: number) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }

    this.result /= value;
    return this;
  }

  power(value: number) {
    this.result **= value;
    return this;
  }

  getResult() {
    return Number(this.result.toFixed(1));
  }
}
