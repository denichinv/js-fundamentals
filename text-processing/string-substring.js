function stringSubstring(word, text) {
  let textArr = text.split(" ");

  for (let textWord of textArr) {
    textWord = textWord.toLowerCase();
    if (textWord === word) {
      console.log(textWord);

      return;
    }
  }
  console.log(`${word} not found!`);
}

stringSubstring("python", "JavaScript is the best programming language");
