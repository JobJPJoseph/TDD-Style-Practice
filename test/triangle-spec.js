// Your code here
const { Triangle, Scalene } = require('../problems/triangle');
const { expect } = require('chai');
// properly install chai spies, do not use sinon for this!
const spies = require('chai-spies');


describe('Triangle', function () {
    // Please use hooks this time
    let triangleValid;
    let triangleNotValid;

    let triangles;

    let triangle1;
    let triangle2;
    let triangle3;
    let triangle4;


    this.beforeEach(function () {
        [side1, side2, side3] = [3, 3, 3];
        triangleValid = new Triangle(side1, side2, side3);
        triangleNotValid = new Triangle(side1, 6, 12);

        triangle1 = new Triangle(5, 5, 5);
        triangle2 = new Triangle(1, 3, 5);
        triangle3 = new Triangle(10, 24, 2);
        triangle4 = new Triangle(3, 6, 9);

        triangles = [triangle1, triangle2,  triangle3, triangle4];
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

    describe('validate', function () {

        it('should initilize a property called isValid', function () {
            expect(triangleValid.isValid).to.be.a('null');
        });

        context('When the triangle is valid', function () {

            it('isValid property should be true', function () {
                triangleValid.validate();
                expect(triangleValid.isValid).to.equal(true);
            });

        });

        context('When the triangle is not valid', function () {

            it('isValid property should be false', function () {
                triangleNotValid.validate();
                expect(triangleNotValid.isValid).to.equal(false);
            });

        });

    });


    describe('getValidTrinagles', function () {

        it('should return an array of valid triangles', function () {
            const actual = Triangle.getValidTriangles(...triangles);
            const expected = [triangle1, triangle4];
            expect(actual).to.deep.equal(expected);
        });

    });

});

describe('Scalene', function () {

    let validScalene;

    this.beforeEach(function () {
        const [side1, side2, side3] = [1, 5, 10];
        validScalene = new Scalene(side1, side2, side3);
    });

    describe('Constructor', function () {

        it('should initialize an instance of the Scalene class', function () {
            expect(validScalene).to.exist;
        });

        it('should initialize the 3 sides', function () {
            expect(validScalene.side1).to.exist;
            expect(validScalene.side2).to.exist;
            expect(validScalene.side3).to.exist;
        });

    });

});

describe('Isosceles', function () {

});
