function sequences(input) {
  const uniqueSet = new Set();

  for (const str of input) {
    const arr = JSON.parse(str).sort((a, b) => b - a);
    uniqueSet.add(JSON.stringify(arr));
  }

  const sequences = Array.from(uniqueSet).map((str) => JSON.parse(str));

  sequences.sort((a, b) => a.length - b.length);

  for (const arr of sequences) {
    console.log(`[${arr.join(", ")}]`);
  }
}

sequences([
  "[7.14, 7.180, 7.339, 80.099]",
  "[7.339, 80.0990, 7.140000, 7.18]",
  "[7.339, 7.180, 7.14, 80.099]",
]);
