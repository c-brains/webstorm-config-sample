
var calcUtil = require('../src/calc-util.js');
var assert = require('power-assert');

describe('add関数のテスト', function() {
    it('1+2は3である', function() {
        assert(calcUtil.add(1, 2) === 3);
    });
    it('1+2は4である', function() {
        assert(calcUtil.add(1, 2) === 4);
    });
});
