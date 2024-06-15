function sorting(arr) {
  let result = [];

  for (let i = 0; i <= arr.length + 2; i++) {
    let biggestToSmallest = arr.sort((a, b) => b - a);
    let num1 = biggestToSmallest.shift();
    result.push(num1);

    let smallestToBiggest = arr.sort((a, b) => a - b);
    let num2 = smallestToBiggest.shift();
    result.push(num2);
  }
  console.log(result.join(" "));
}
sorting([
  34, 2, 32, 45, 690, 6, 32,

  7, 19, 47,
]);
