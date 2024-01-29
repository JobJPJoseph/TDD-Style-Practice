// Your code here
const Triangle = require('../problems/triangle');
const { expect } = require('chai');
// properly install chai spies, do not use sinon for this!
const spies = require('chai-spies');


describe('Triangle', function () {
    // Please use hooks this time
    let triangle;

    describe('Constructor', function () {

        this.beforeEach(function () {
            [side1, side2, side3] = [3, 3, 3];
            triangle = new Triangle(side1, side2, side3);
        });

        it('should create an instance of the triangle class', function () {
            expect(triangle).to.exist;
            expect(triangle).to.be.instanceOf(Triangle);
        });

        it('should initialize 3 arguments: side1, side2, side3', function () {
            expect(triangle.side1).to.exist;
            expect(triangle.side2).to.exist;
            expect(triangle.side3).to.exist;
        });

    });

    describe('getPerimeter' , function () {

        it('should return the sum of all three sides', function () {

        });
    });

});

describe('Scalene', function () {

});

describe('Isosceles', function () {

});
