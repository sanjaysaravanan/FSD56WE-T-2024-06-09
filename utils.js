const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

// exporting using common js
module.exports = {
  add,
  mul,
  sub,
};
