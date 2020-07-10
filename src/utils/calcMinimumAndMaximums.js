export function calcMinimumAndMaximum(data, key, deviation) {
  return removeOutliers(data, key, deviation).reduce(
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

function removeOutliers(data, key, deviation) {
  data = [...data];
  data = data.sort((a, b) => a[key] - b[key]);
  const high = data.length - deviation;
  return data.slice(deviation, high);
}
