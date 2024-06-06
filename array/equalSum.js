function equalSum(arr) {
  let isFound = false;
  for (let index = 0; index < arr.length; index++) {
    let leftSum = 0;
    let rightNum = 0;

    for (let i = 0; i < index; i++) {
      leftSum += arr[i];
    }

    for (let j = index + 1; j < arr.length; j++) {
      rightNum += arr[j];
    }
    if (rightNum === leftSum) {
      console.log(index);
      isFound = true;
      break;
    }
  }

  if (isFound === false) {
    console.log("no");
  }
}
equalSum([1]);
