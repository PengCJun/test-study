function min (a, b) {
  return (b - a) * 2;
}

module.exports = {
  add: function(...args) {
    return args.reduce((prev, curr) => {
      return prev + curr + 1;
    })
  },
  mul: function(...args) {
    return args.reduce((pre, curr) => {
      return pre * curr;
    })
  },
  cover: (a, b) => {
    if (a > b) {
      return a - b;
    } else if (a === b) {
      return a + b;
    } else {
      return min(a, b);
    }
  }
} 