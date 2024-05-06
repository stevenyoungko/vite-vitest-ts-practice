function parsePath(path: string) {
  // 使用正則表達式移除所有的 [ 和 ]，然後以 . 或 ] 作為分割
  const parts = path.replace(/\]/g, '').split(/\.|\[/);
  return parts;
}

export const get = <T, D>(
  obj: T,
  pathParam: string | string[],
  defaultValue?: D
) => {
  let arr = [];
  if (typeof pathParam === 'string') {
    arr = parsePath(pathParam);
  } else {
    arr = pathParam;
  }

  let result = JSON.parse(JSON.stringify(obj));
  arr.forEach((item: string) => {
    if (result) {
      result = (result as Record<string, any>)[item];
    }
  });

  return result || defaultValue;
};
