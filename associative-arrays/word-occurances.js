function solve(arr) {
  let wordOccurances = {};

  for (const word of arr) {
    if (!(word in wordOccurances)) {
      wordOccurances[word] = 1;
    } else {
      wordOccurances[word] += 1;
    }
  }
  let entries = Object.entries(wordOccurances).sort((a, b) => b[1] - a[1]);
  for (const [word, count] of entries) {
    console.log(`${word} -> ${count} times`);
  }
}
solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
