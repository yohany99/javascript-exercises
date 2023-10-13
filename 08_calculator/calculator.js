const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	total = 0;
  for (const elem of array) {
    total += elem;
  }
  return total;
};

const multiply = function(array) {
  total = 1;
  for (const elem of array) {
    total *= elem;
  }
  return total; 
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  total = 1;
	while (a) {
    total *= a;
    a -= 1;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
