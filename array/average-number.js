let numbers = [5.2, 1.6, 6.6, 3.6, 7];

let totalSum = numbers.reduce((acc, num) => acc + num, 0);

let average = totalSum / numbers.length;

console.log(average);
