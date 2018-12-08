// mocha这个库是一个测试框架，本身不进行测试，只是提供一个框架。同时不需要自己引入。

const {expect, assert} = require('chai')
const {add, mul, cover} = require('../src/math')

describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2 + 3', () => {
      assert(add(2, 3), 5);
    });
    // only只执行这一个，skip跳过这一个
    // it.only('should return 1 wen 2 -3', () => {
    //   expect(add(2, 3), -1);
    // });
    it('should return -1 wen 2 -3', () => {
      assert(add(2, 3), -1);
    })
  });

  describe('mul', () => {
    it('should return 6 when 2 * 3', () => {
      assert(mul(2, 3), 6);
    })
  });

  describe('cover', () => {
    it('should return 1 when 3, 2', () => {
      expect(cover(3,2)).to.equal(1);
    })
  });

  describe('cover', () => {
    it('should return 2 when 1, 1', () => {
      expect(cover(1,1)).to.equal(2);
    })
  });

  describe('cover', () => {
    it('should return 2 when 1, 2', () => {
      expect(cover(1,2)).to.equal(2);
    })
  });
})

// 测试覆盖率 npm install --save-dev istanbul
// branch分支就是if else这样的代码，有几个条件就有几个分支

// 持续集成