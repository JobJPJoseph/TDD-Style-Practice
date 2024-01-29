// Your code here
const Triangle = require('../problems/triangle');
const { expect } = require('chai');
// properly install chai spies, do not use sinon for this!
const spies = require('chai-spies');


describe('Triangle', function () {
    // Please use hooks this time
    let triangleValid;
    let triangleNotValid;

    this.beforeEach(function () {
        [side1, side2, side3] = [3, 3, 3];
        triangleValid = new Triangle(side1, side2, side3);
        triangleNotValid = new Triangle(side1, 6, 12);
    });

    describe('Constructor', function () {

        it('should create an instance of the triangleValid class', function () {
            expect(triangleValid).to.exist;
            expect(triangleValid).to.be.instanceOf(Triangle);
        });

        it('should initialize 3 arguments: side1, side2, side3', function () {
            expect(triangleValid.side1).to.exist;
            expect(triangleValid.side2).to.exist;
            expect(triangleValid.side3).to.exist;
        });

    });

    describe('getPerimeter' , function () {

        it('should return the sum of all three sides', function () {
            const actual = triangleValid.getPerimeter();
            const expected = 9;
            expect(actual).to.equal(expected);
        });

    });

    describe('hasValidSideLengths', function () {

        context('Triangle is valid', function () {

            it('should return true if the triangleValid is valid', function () {
                const actual = triangleValid.hasValidSideLengths();
                const expected = true;
                expect(actual).to.equal(expected);
            });
        });

        context('Triangle is not valid', function () {

            it('should return false if the triangleValid is not valid', function () {
                const actual = triangleNotValid.hasValidSideLengths();
                const expected = false;
                expect(actual).to.equal(expected);
            });

        });
    });

});

describe('Scalene', function () {

});

describe('Isosceles', function () {

});
