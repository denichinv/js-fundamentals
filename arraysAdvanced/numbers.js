function num(string) {
  let arr = string.split(" ").map(Number);
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }

  let averageSum = (sum / Number(arr.length)).toFixed(2);

  let filteredNum = arr.filter((a) => a > averageSum);

  if (filteredNum.length === 0) {
    console.log("No");
  } else {
    filteredNum.sort((a, b) => b - a);
    let slicedNum = filteredNum.slice(0, 5);
    console.log(slicedNum.join(" "));
  }
}
num("5 2 3 4 -10 30 40 50 20 50 60 60 51");

// Write a program to read a sequence of integers and find and print the top 5 numbers greater than the average value in the sequence, sorted in descending order.

// Print the above-described numbers on a single line, space-separated.

//  If less than 5 numbers hold the property mentioned above, print less than 5 numbers.

// ·Print "No" if no numbers hold the above property.
