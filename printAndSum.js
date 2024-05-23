function printAndSum(startNum, endNum) {
  let numInRow = "";
  let sum = 0;

  for ( startNum; (startNum <= endNum); startNum++) {

    let currNum = startNum

    sum += currNum
    numInRow += currNum + " "

    
  }

  console.log(numInRow);
  console.log(`Sum: ${sum}`);
}
printAndSum(50, 60);
