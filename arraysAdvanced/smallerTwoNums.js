function smallestTwoNums(arr) {
  const newSortedArr = arr.sort((a, b) => a - b);
  console.log(newSortedArr.slice(0, 2).join(" "));
}

smallestTwoNums([3, 0, 10, 4, 7, 3]);
