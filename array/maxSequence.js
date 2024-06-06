function maxSequence(array) {
  let longestSequence = [];
  let currSequence = [array[0]];
  for (let index = 1; index < array.length; index++) {
    let currNum = array[index];

    if (currNum === currSequence[0]) {
      currSequence.push(currNum);

      if (currSequence.length > longestSequence.length) {
        longestSequence = currSequence;
      }
    } else {
      currSequence = [currNum];
    }
  }
  console.log(longestSequence.join(' '));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
