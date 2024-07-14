function oddOccurrences(string) {
  let arr = string.split(" ");
  let result = {};

  for (const word of arr) {
    let elToLowerCase = word.toLowerCase();

    if (result[elToLowerCase]) {
      result[elToLowerCase] += 1;
    } else {
      result[elToLowerCase] = 1;
    }
  }

  let entries = Object.entries(result).sort((a, b) => b[1] - a[1]);
  let finalResult = [];
  for (const word of entries) {
    if (word[1] % 2 === 1) {
      finalResult.push(word[0]);
    }
  }
  console.log(finalResult.join(" "));
}
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
