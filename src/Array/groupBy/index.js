Array.prototype.groupBy = function (fn) {
  let result = {};

  this.forEach((item) => {
    const key = fn(item);

    if (!result[key]) {
      result[key] = [item];
    } else {
      result[key].push(item);
    }
  });

  return result;
};
