export function join(arr1, arr2) {
  const arrMap = arr1.reduce(
    (acc, item) => Object.assign(acc, { [item.id]: item }),
    {}
  );

  arr2.forEach((item) => {
    arrMap[item.id] = item;
  });

  const result = Object.values(arrMap);
  return result;
}
