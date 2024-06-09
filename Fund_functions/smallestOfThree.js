function smallestOfThreeNums(firstNum, secondNum, thirdNum) {

   const smallerOfTwo = (num1, num2 ) => num1 < num2 ?  num1 : num2;

  if (smallerOfTwo(firstNum, secondNum) < thirdNum) {
    console.log(smallerOfTwo(firstNum,secondNum));
  }
  else{
    console.log(thirdNum);
  }
    
}
smallestOfThreeNums(6,

    342,
    
    123)