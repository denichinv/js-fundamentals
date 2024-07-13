function wordTracker(arrOfWords) {
  let wordCounter = {};

  let keyWords = arrOfWords.shift().split(" ");
  for (const word of keyWords) {
    wordCounter[word] = 0;
  }
  for (let tokens of arrOfWords) {
    if (tokens in wordCounter) {
      wordCounter[tokens] += 1;
    }
  }

  let entries = Object.entries(wordCounter).sort((a, b) => b[1] - a[1]);

  for (const [word, count] of entries) {
    console.log(`${word} - ${count}`);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
