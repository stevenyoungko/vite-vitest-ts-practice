export const reduce = (
  nums: number[],
  fn: (acc: number, cur: number) => number,
  init: number
) => {
  let result = init;
  nums.forEach((item) => {
    result = fn(result, item);
  });
  return result;
};
