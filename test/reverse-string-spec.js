// Your code here

const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');

describe('Reverse String', function () {

    it('should reverse the string "purpose" into "esoprup"', function () {
        const word = 'purpose';
        const actual = reverseString(word);

        const expected = 'esoprup';
        expect(actual).to.equal(expected);
    });

    it('should have an empty string return an empty string', function () {
        const word = "";
        const actual = reverseString(word);

        const expected = "";
        expect(actual).to.equal(expected);
    });

    it('should consider a non-string type to throw an error', function () {
        const word = 1542;
        const actual = () => reverseString(word);

        expect(actual).to.throw(Error);
    });

});
