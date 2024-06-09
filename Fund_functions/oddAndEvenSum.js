function SumOfOddAndEven(num) {
    let oddSum = 0;
    let evenSum = 0;
    const numStr = num.toString()
    for (let i = 0; i < numStr.length; i++) {
            curNum = Number(numStr[i]);
      if (curNum % 2 === 0) {
        evenSum += curNum
      }
      else { oddSum += curNum}
    }
    
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
  };


SumOfOddAndEven(3495892137259234);