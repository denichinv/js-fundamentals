function averageOfArray(numbers) {
  let totalSum = numbers.reduce((acc, num) => acc + num, 0);

  return totalSum / numbers.length;
}

let average = averageOfArray([5.27, 4.642, 6.666, 3.612, 5]);
let roundNum = Math.round(average * 100) / 100;

console.log(roundNum);
