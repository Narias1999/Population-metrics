export function calcMinimumAndMaximum(data, key) {
  return data.reduce(
    (acc, current) => {
      if (current[key] < acc[0]) {
        acc[0] = current[key];
      }

      if (current[key] > acc[1]) {
        acc[1] = current[key];
      }
      return acc;
    },
    [Infinity, -Infinity]
  );
}
