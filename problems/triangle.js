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
}

module.exports = Triangle;
