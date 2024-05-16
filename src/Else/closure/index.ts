export const createHelloWorld = function () {
  return function (...args: any[]) {
    return 'Hello World';
  };
};
