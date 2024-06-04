function EvenOrOdd(arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  console.log(evenSum - oddSum);
}
EvenOrOdd([1, 2, 3, 4, 5, 6]);
