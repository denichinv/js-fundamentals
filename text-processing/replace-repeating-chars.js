function replaceRepeatingChars(str) {
  let result = str[0];

  for (let i = 1; i < str.length; i++) {
    let curChar = str[i];

    let lastIndex = result.length - 1;

    if (curChar !== result[lastIndex]) {
      result += curChar;
    }
  }

  console.log(result);
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
