function charsInRange(char1, char2) {
  const charOne = char1.charCodeAt(0);
  const charTwo = char2.charCodeAt(0);
  let result = [];

  const lower = Math.min(charOne, charTwo);
  const upper = Math.max(charOne, charTwo);

  for (let currCode = lower + 1; currCode < upper; currCode++) {
    let currChar = String.fromCharCode(currCode);
    result.push(currChar);
  }

  console.log(result.join(" "));
}
charsInRange("C", "#");
