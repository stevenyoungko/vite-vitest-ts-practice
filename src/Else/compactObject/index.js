export const compactObject = function (obj) {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.filter((item) => Boolean(item));
  }

  let result = {};
  for (const [key, value] of Object.entries(obj)) {
    const newValue = compactObject(value);
    if (newValue) {
      result[key] = newValue;
    }
  }

  return result;
};
