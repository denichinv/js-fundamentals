function lettersChangeNumbers(text) {
  let strs = text.split(" ").filter((string) => string.length > 0);

  let sum = 0;

  for (const str of strs) {
    const firstLetter = str[0];
    const lastLetter = str[str.length - 1];
    let nums = Number(str.slice(1, str.length - 1));

    if (firstLetter === firstLetter.toUpperCase()) {
      let position = firstLetter.charCodeAt() - 64;
      nums /= position;
    } else {
      let position = firstLetter.charCodeAt() - 96;
      nums *= position;
    }
    if (lastLetter === lastLetter.toUpperCase()) {
      let position = lastLetter.charCodeAt() - 64;
      nums -= position;
    } else {
      let position = lastLetter.charCodeAt() - 96;
      nums += position;
    }

    sum += nums;
  }
  console.log(sum.toFixed(2));
}

lettersChangeNumbers("A12b s17G");
