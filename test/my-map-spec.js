// Your code here
const { expect } = require('chai');
const { myMap } = require('../problems/my-map');
const spies = require('chai-spies');
const chai = require('chai');

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

    });

    context('validate return value type', function () {

    });

});
