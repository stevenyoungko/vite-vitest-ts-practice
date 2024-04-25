type CancelableIntervalResult<R> = {
  cancel: () => void;
  output: {
    time: number;
    returned: R;
  }[];
};

export function cancelableInterval<T extends unknown[], R>(
  fn: (...args: T) => R,
  args: T,
  t: number
): CancelableIntervalResult<R> {
  let currentTime = 0;
  const output = [
    {
      time: currentTime,
      returned: fn(...args),
    },
  ];

  const intervalId = setInterval(() => {
    currentTime += t;
    output.push({
      time: currentTime,
      returned: fn(...args),
    });
  }, t);

  const cancel = () => {
    clearInterval(intervalId);
  };

  return {
    cancel,
    output,
  };
}
