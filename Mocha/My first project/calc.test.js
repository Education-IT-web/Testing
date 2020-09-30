let calc = require('./calc');
//let assert = require('./assert');
describe("sum", function () {
    it("adds the numbers a and b", function () {
        let result = calc.sum(1, 2);
        assert.equal(result, 3);
    });
})