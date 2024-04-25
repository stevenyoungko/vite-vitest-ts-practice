type CancelableTimeoutResult<R> = {
  cancel: () => void;
  fnResult: Promise<R>;
};

export function cancelableTimeout<T extends unknown[], R>(
  fn: (...args: T) => R,
  args: T,
  timeout: number
): CancelableTimeoutResult<R> {
  let timeoutId: number | null = null;
  let isCancelled = false;

  const fnResult = new Promise<R>((resolve, reject) => {
    timeoutId = setTimeout(() => {
      // 在 timeout 毫秒後如果還沒被取消則執行 fn
      if (isCancelled) {
        reject(new Error('fn has been canceled!'));
      } else {
        resolve(fn(...args));
      }
    }, timeout);
  });

  const cancelFn = () => {
    // 如果 timeoutId 存在則清掉
    if (timeoutId) {
      clearTimeout(timeoutId);
      isCancelled = true;
    }
  };

  return {
    cancel: cancelFn,
    fnResult,
  };
}
