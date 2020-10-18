let calc = require('./calc');
describe("сумма", function () {
    it("сложение чисел a и b", function () {
        let result = calc.sum(1, 2);
        let expectedResult = 3;
        if (result !== expectedResult) {
            throw new Error(`Expected ${expectedResult}, but got ${result}`)
        }
    });
    it("сложение чисел a и b", function () {
        let result = calc.sum(0, 0);
        let expectedResult = 0;
        if (result !== expectedResult) {
            throw new Error(`Expected ${expectedResult}, but got ${result}`)
        }
    });
});
describe("разность", function () {
    it("разность чисел a и b", function () {
        let result = calc.diff(2, 1);
        let expectedResult = 1;
        if (result !== expectedResult) {
            throw new Error(`Expected ${expectedResult}, but got ${result}`)
        }
    })
});
describe("умножение", function () {
    it("произведение чисел a и b", function () {
        let result = calc.mult(5, 10);
        let expectedResult = 50;
        if (result !== expectedResult) {
            throw new Error(`Expected ${expectedResult}, but got ${result}`)
        }
    });
});
describe("деление", function () {
    it("деление a на b", function () {
        let result = calc.div(12, 4);
        let expectedResult = 3;
        if (result !== expectedResult) {
            throw new Error(`Expected ${expectedResult}, but got ${result}`)
        }
    });
});