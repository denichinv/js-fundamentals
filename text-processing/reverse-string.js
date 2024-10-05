function reverseStrings(arr) {
  let result = [];

  if (Array.isArray(arr)) {
    for (const el of arr) {
      if (typeof el === "string") {
        let reversedWord = "";
        for (let index = el.length - 1; index >= 0; index--) {
          const element = el[index];
          reversedWord += element;
        }
        result.push(reversedWord);
      } else {
        continue;
      }
    }
    console.log(result);
    return result;
  } else {
    console.log("It's not an array!");
  }
}

reverseStrings(["apple", "banana", "cherry"]);
// reverseStrings(44);
