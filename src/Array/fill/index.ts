export function fill<T, V>(
  array: (T | V)[],
  value: V,
  start: number = 0,
  end: number = array.length
) {
  const state = { start, end };

  if (start < 0) {
    state.start += array.length;

    if (state.start < 0) {
      state.start = 0;
    }
  }

  if (end < 0) {
    state.end += array.length;

    if (state.end < 0) {
      state.end = 0;
    }
  }

  if (end > array.length) {
    state.end = array.length;
  }

  for (let i = state.start; i < state.end; i++) {
    array[i] = value;
  }

  return array;
}


// example2
function fill2<T, V>(array: (T | V)[], value: V, start = 0, end = array.length) {
  if (start < 0) {
    start += array.length
  }
  if (end < 0) {
    end += array.length
  }

  
  return array.map((item, index) => {
    if (index >= start && index < end) {
      return value
    }
    return item
  })  
}