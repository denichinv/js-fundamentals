function SumDigits(number) {
    let numToString = number + "";
    let result = 0;

    for (let index = 0; index < numToString.length; index++) {
         currNum = Number(numToString[index]);
         result += currNum
         
        }
        console.log(result);
    }
SumDigits(245678)