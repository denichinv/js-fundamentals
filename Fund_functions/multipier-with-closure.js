function createMultiplier(multiplier) {
  function multiply(num) {
    return multiplier * num;
  }

  return multiply;
}

const double = createMultiplier(2);
console.log(double(5));

const triple = createMultiplier(3);
console.log(triple(4));
