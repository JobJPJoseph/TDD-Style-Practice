// Your code here
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
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
}

module.exports = Triangle;
