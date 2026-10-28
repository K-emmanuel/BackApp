function average(values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum = sum + values[i];
  }
  return sum / values.length;
}

function getMinimum(values) {
  let min = values[0];
  for (let i = 1; i < values.length; i++) {
    if (values[i] < min) {
      min = values[i];
    }
  }
  return min;
}

module.exports = { average, getMinimum };