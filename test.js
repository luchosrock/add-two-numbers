var expect = require('chai').expect;
var addTwo = require('./');


describe('addTwoNumbers()', function () {
    it('should add', function () {
        const a = 2;
        const b = 7;
        const sum1 = a + b;
        const sum2 = addTwo.addTwoNumbers(a,b);
        console.log(`Expect ${sum1} to be equal ${sum2}`);
        expect(sum2).to.be.equals(sum1);
    });
});

