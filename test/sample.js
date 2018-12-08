const {add, mul} = require('../src/math.js')

// if (add(2, 3) === 5) {
//   console.log('add(2,3) === 5, ok!');
// } else {
//   console.log('add(2,3) !== 5, err!');
// }

// 利用node自己的断言assert来做测试
const assert = require('assert')
assert.equal(add(2, 3), 5, '应该是6');

// 利用chai测试库来做测试
// const {should, expect, assert} = require('chai')
// // 首先执行一次
// should();
// // add(2, 3).should.equal(5);
// // expect(add(2, 3).to.equal(5);
// assert.equal(add(2, 3), 5);

