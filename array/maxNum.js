function maxNum(arr) {
  topInt = [];
  for (let index = 0; index < arr.length; index++) {
    let num = arr[index];
    let isTop = true;

    for (let i = index + 1; i < arr.length; i++) {
      let rightNum = arr[i];

      if (num <= rightNum) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      topInt.push(num);
    }
  }
  console.log(topInt.join(" "));
}
maxNum([14, 24, 3, 19, 15, 17]);
