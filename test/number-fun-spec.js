// Your code here
const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');


describe('Return Three', function () {
    it('should return 3', function () {
        expect(returnsThree()).to.equal(3)
    });
});

describe('Reciprocal', function () {
    it('should return the reciprocal of 6', function () {
        const n = 6;
        expect(reciprocal(n)).to.equal(1/6);
    });

    it('should return the reciprocal of 4/6', function () {
        const n = (4 / 6); // 0.6~
        expect(reciprocal(n)).to.equal(6 / 4);
    });

    it('should return the reciprocal of a franctional input', function () {
        const frac = { numerator: 4, denominator: 6 };
        const actual = reciprocal(frac);
        const expected = { numerator: 6, denominator: 4 };
        expect(actual).to.deep.equal(expected);
    });

    it('should throw an error if it is not an object or number', function () {
        const str = 'I am a fraction';
        expect(() => reciprocal(str)).to.throw(Error);
    });
});
