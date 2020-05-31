var expect = require('chai').expect
var hello = require("../src/hello");
describe('Hello', function() {
    describe('#greet()', function() {
        it('should greet', function() {
            let welcome = hello.greet("Biju")
            expect(welcome.split(" ").length).to.equal(2);
            expect(welcome.split(" ")[1]).to.equal("Biju");
        });
    });
});