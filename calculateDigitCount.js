function calculateDigitCount(number, digit) {
  let count = 0;

  while (number !== 0) {
    const leftover = number % 2;
    if (leftover == digit) {
      count++;
    }

    number = Math.floor(number / 2);
  }

  console.log(count);
}

calculateDigitCount(790, 0);
