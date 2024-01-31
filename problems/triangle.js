// Your code here
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.isValid = undefined;
    }

    getPerimeter() {
        return [this.side1, this.side2, this.side3].reduce((accum, element) => {
            return accum + element;
        }, 0);
    }

    hasValidSideLengths() {
        // The sum of two sides must be greater than the remaining
        if((this.side1 + this.side2) < this.side3) return false;
        if((this.side1 + this.side3) < this.side2) return false;
        if((this.side2 + this.side3) < this.side1)  return false;
        return true;
    }

    validate() {
        this.isValid = this.hasValidSideLengths();
    }

    static getValidTriangles(...triangles) {
        return triangles.filter((triangle) => {
            triangle.validate();
            return triangle.isValid;
        });
    }

}

class Scalene extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);

    }

    isScalene() {
        // all sides cannot equal one another
        if ((this.side1 === this.side2) || (this.side1 === this.side3)) return false;
        return true;
    }

    validate() {
        this.isValid = this.isScalene();
    }
}

module.exports = {
    Triangle,
    Scalene
};
