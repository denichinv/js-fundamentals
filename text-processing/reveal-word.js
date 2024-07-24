function revealWord(targetWord, text) {
  let targetWords = targetWord.split(", ");
  let textArr = text.split(" ");

  let templates = textArr.filter((word) => word.includes("*"));

  for (const template of templates) {
    let templateLength = template.length;

    let word = targetWords.find((w) => w.length === templateLength);

    text = text.replace(template, word);
  }

  console.log(text);
}
revealWord(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
