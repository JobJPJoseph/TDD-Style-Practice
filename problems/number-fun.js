function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(input) {
  // Your code here
  /*
  We need to consider fractions as a object
  */

  if (typeof input === 'number') {
    // A whole number
    return (1 / input);
  } else if (typeof input === 'object') {
    const fraction = { numerator: input.denominator, denominator: input.numerator };
    return fraction;
  } else {
    throw new Error();
  }

}

module.exports = {
  returnsThree,
  reciprocal
};
