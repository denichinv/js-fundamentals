function addAndSubtract(arr) {
  let oldSum = 0;
  let newSum = 0;
  let newNum = 0;

  for (let index = 0; index < arr.length; index++) {
    let oldNum = arr[index];
    oldSum += oldNum;

    if (oldNum % 2 === 0) {
      newNum = oldNum + index;
    } else {
      newNum = oldNum - index;
    }

    newSum += newNum;

   
      if (arr[index] === oldNum) {
        arr[index] = newNum;
      }
      
    }
    console.log(arr);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
