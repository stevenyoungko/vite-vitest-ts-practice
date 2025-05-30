export function throttle(fn, t) {
  let last = 0;

  return function (...args) {
    const now = Date.now();

    if (now - last >= t) {
      fn(...args);
      last = now;
    }
  };
}

function throttle2(fn, delay = 500) {
  let timer = null;

  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}
