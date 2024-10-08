function challenge(array) {
  function filter(arr) {
    return arr.filter((num) => num > 10);
  }

  function map(arr) {
    return arr.map((num) => num * num);
  }

  function reduce(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }

  let filteredArr = filter(array);
  let mappedArr = map(filteredArr);
  let totalSum = reduce(mappedArr);

  return totalSum;
}

console.log(challenge([25, 12, 8, 5, 17, 43]));
