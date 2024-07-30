function mirrorWords(arr) {
  let text = arr.shift();
  let pattern = /(#|@)([A-z]{3,})\1\1([A-z]{3,})\1/gm;

  let mirrorWords = [];

  let pairsFound = 0;
  let mirrorWordsFound = 0;

  let matches = text.match(pattern);
  if (matches) {
    for (const match of matches) {
      pairsFound++;
      let wordSplit = match.split(/[@#]+/);
      let [word1, word2] = wordSplit.filter((str) => str.trim());

      let word2Reversed = word2.split("").reverse().join("");

      if (word1 === word2Reversed) {
        mirrorWordsFound++;
        let mirrorWord = `${word1} <=> ${word2}`;
        mirrorWords.push(mirrorWord);
      }
    }
  }
  if (pairsFound !== 0) {
    console.log(`${pairsFound} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }
  if (mirrorWordsFound !== 0) {
    console.log("The mirror words are:");
    console.log(mirrorWords.join(", "));
  } else {
    console.log("No mirror words!");
  }
}

mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
