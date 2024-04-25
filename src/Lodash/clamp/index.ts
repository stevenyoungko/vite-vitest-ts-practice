export function clamp(value: number, lower: number, upper: number) {
  if (value >= lower && value <= upper) {
    return value;
  } else if (value < lower) {
    return lower;
  } else {
    return upper;
  }
}

// 解法2
export function clamp2(value: number, lower: number, upper: number) {
  return Math.min(Math.max(value, lower), upper);
}
