function myMap(inputArray, callback) {
  // Your code here
  if (!Array.isArray(inputArray)) throw new Error;
  if (typeof callback !== 'function') throw new Error;

  const emptyArray = [];

  for(let i = 0; i < inputArray.length; i++) {
    const elem = inputArray[i];
    const result = callback(elem);

    emptyArray.push(result);
  }


  return emptyArray;
}

module.exports = {
  myMap
};
