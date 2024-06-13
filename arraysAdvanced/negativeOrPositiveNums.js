function negativePositiveNum(arr) {
  let result = [];
  for (const num of arr) {
    if (num >= 0) {
      result.push(num);
    } else {
      result.unshift(num);
    }
  }
  console.log(result.join("\n"));
}

negativePositiveNum(["3", "-2", "0", "-1"]);
