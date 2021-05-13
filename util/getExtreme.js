export function getHigh(data) {
  // loop thru values, find the highest temp value and return that as a string

  let high = data.reduce((max, item) =>
    max.main.temp > item.main.temp ? max : item
  );

  return high;
}

export function getLow(data) {
  let low = data.reduce((min, item) =>
    min.main.temp < item.main.temp ? min : item
  );

  return low;
}
