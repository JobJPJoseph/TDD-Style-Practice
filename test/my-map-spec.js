// Your code here
const { myMap } = require('../problems/my-map');

const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');

chai.use(spies);

describe('myMap', function () {

    let arrayTypeNums;
    let emptyArray;
    let arrayTypeStr;
    let stringType;

    let justReturn;
    let multiply;
    let addYay;

    this.beforeEach(function () {
        arrayTypeNums = [1, 2, 3, 4];
        arrayTypeStr = ['a', 'b', 'c', 'd'];
        emptyArray = [];
        stringType = "I am a string";

        justReturn = (input) => {
            return input;
        }

        multiply = (input) => {
            return input * 2;
        }

        addYay = (input) => {
            return input + "yay";
        }

    });

    it('should take two arguments: input array and a callback', function () {
        // Use chai.spy.on to spy on the function
        const myMapSpy = chai.spy.on(myMap);

        myMapSpy(arrayTypeNums, justReturn);

        // Use chai.spy.on to make assertions about the spy
        expect(myMapSpy).to.have.been.called.with(arrayTypeNums, justReturn);
    });

    context('validate arguments type', function () {

        it('should throw an error if first argument is not an array type', function () {
            expect(() => myMap(stringType, justReturn)).to.throw(Error);
        });

        it('should throw an Error if the second argument is not a callback', function () {
            expect(() => myMap(arrayTypeNums, stringType)).to.throw(Error);
        });

    });

    it('should call the callback', function () {
        const myMultiply = chai.spy.on(multiply);

        myMap(arrayTypeNums, myMultiply);

        expect(myMultiply).to.have.been.called();
    });

    context('arrayTypeNums', function () {

        it('should return a value that is an array type and equal [2, 4, 6, 8]', function () {
            const expected = [2, 4, 6, 8];
            const actual = myMap(arrayTypeNums, multiply);

            expect(actual).to.be.a('array');
            expect(actual).to.deep.equal(expected);
        });

    });

    context('arrayTypeStr', function () {

        it('should return a value that is an array and equal ["ayay", "byay", "cyay", "dyay"]', function () {
            const actual = myMap(arrayTypeStr, addYay);
            const expected = ["ayay", "byay", "cyay", "dyay"];

            expect(actual).to.be.a('array');
            expect(actual).to.deep.equal(expected);
        });

    });

    context('emptyArray', function () {

        it('should return a value that is an array type and equal []', function () {
            const actual = myMap(emptyArray, multiply);
            const expected = [];

            expect(actual).to.be.a('array');
            expect(actual).to.deep.equal(expected);
        });

    });

    context('mixed inputs', function () {

        it('should still return a value [NaN, NaN, NaN, NaN]', function () {
            const actual = myMap(arrayTypeStr, multiply);
            const expected = [NaN, NaN, NaN, NaN];

            expect(actual).to.deep.equal(expected);
        });

        it('should also still return a value [NaN, NaN, NaN, NaN]', function () {
            const actual = myMap(arrayTypeNums, addYay);
            const expected = [ '1yay', '2yay', '3yay', '4yay' ];

            expect(actual).to.deep.equal(expected);
        });

    });

});
