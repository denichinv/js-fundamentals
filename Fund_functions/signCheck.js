function signCheck(numOne, numTwo, numThree) {

    const multiplyFirstTwo = (a, b) => a * b 
    const resultCheck = result => result >= 0 ? console.log('Positive') : console.log('Negative');
        
    
    
    let result = multiplyFirstTwo(numOne,numTwo) * numThree
    resultCheck(result);

}
signCheck(-6,-12,14);
