function bombNumbers(numSequence, specialBombNum) {
  let sum = 0;
  const specialNum = specialBombNum[0];
  const power = specialBombNum[1];

  for (let i = 0; i < numSequence.length; i++) {
    let num = numSequence[i];

    if (num === specialNum) {
      let startIdx = Math.max(0, i - power);
      let endIdx = Math.min(numSequence.length - 1, i + power);

      let numElementsToRemove = endIdx - startIdx + 1;

      numSequence.splice(startIdx, numElementsToRemove);

      i = startIdx - 1;
    }
  }

  for (const num of numSequence) {
    sum += num;
  }

  console.log(sum);
}

bombNumbers(
  [
    1, 2, 2, 4, 2, 2,

    2, 9,
  ],

  [4, 2]
);
