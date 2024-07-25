function passwordGenerator(arr) {
  let concatenatedString = arr[0] + arr[1];
  let replacementWord = arr[2];
  let vowels = "aeiou";
  let result = [];
  let replacementIndex = 0;

  for (const letter of concatenatedString) {
    if (vowels.includes(letter)) {
      result.push(replacementWord[replacementIndex].toUpperCase());
      replacementIndex = (replacementIndex + 1) % replacementWord.length;
    } else {
      result.push(letter.toLowerCase());
    }
  }

  let finalPassword = result.reverse().join("");
  console.log(`Your generated password is ${finalPassword}`);
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
