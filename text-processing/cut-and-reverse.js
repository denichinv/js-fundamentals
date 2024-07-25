function cutAndReverse(str) {
  let chars = str.split("");
  chars.reverse();

  let firstHalf = [];
  let secondHalf = [];

  for (let i = 0; i < chars.length / 2; i++) {
    const curChar = chars[i];
    firstHalf += curChar;
  }
  for (let j = chars.length / 2; j < chars.length; j++) {
    const curChar = chars[j];
    secondHalf += curChar;
  }

  console.log(secondHalf);
  console.log(firstHalf);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
