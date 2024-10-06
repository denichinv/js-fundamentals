function createCounter(num = 0) {
  function increment() {
    num++;
  }

  function getValue() {
    return num;
  }

  return { increment, getValue };
}

const counter = createCounter(5);
counter.increment();
counter.increment();
console.log(counter.getValue());
