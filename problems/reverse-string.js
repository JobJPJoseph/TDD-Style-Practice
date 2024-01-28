module.exports = function reverseString(string) {
  // Your code here
  if (typeof string !== 'string') throw new Error();
  let revString = "";

  for(let i = string.length - 1; i >= 0; i--) {
    revString += string[i];
  }

  return revString;
};
