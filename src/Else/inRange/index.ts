export function inRange(value: number, a: number, b: number = 0): boolean {
  let [lower, upper] = [a, b];

  if (lower > upper) {
    lower = b;
    upper = a;
  }

  return upper > value && value >= lower;
}

export function inRange2(value: number, a: number, b: number = 0): boolean {
  return Math.min(a, b) <= value && value < Math.max(a, b);
}
