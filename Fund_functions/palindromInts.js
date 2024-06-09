function palindromeInts(arr) {
  function checkIfPalindrome(num) {
    const numStr = num + "";
    let numStringReversed = "";

    for (let i = numStr.length - 1; i >= 0; i--) {
      const curChar = numStr[i];
      numStringReversed += curChar;
    }
    return numStringReversed === numStr
    
  }

  for (const num of arr) {
    console.log(checkIfPalindrome(num));
  }
}
palindromeInts([32, 2, 232, 10101]);
