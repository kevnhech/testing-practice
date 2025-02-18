function analyzeArray(array) {
  array.sort();
  let obj = {
    average: array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length,
    min: array[0],
    max: array[array.length - 1],
    length: array.length
  }
  return obj;
}
module.exports = analyzeArray;