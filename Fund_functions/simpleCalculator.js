function simpleCalculator(numOne, numTwo, operator) {
    const multiply = (a, b) => a * b;  
    const divide = (a, b) => a / b;  
    const add = (a, b) => a + b;  
    const subtract = (a, b) => a - b;  
 
let result = 0 
    switch (operator) {
        case 'multiply':
            
         result = multiply(numOne,numTwo)
            break;
        case 'divide':
            result = divide(numOne,numTwo)
            break;
        case 'add':
            result = add(numOne,numTwo)
            break;
        case 'subtract':
            result = subtract(numOne,numTwo)
            break;
      
    }
    console.log(result);
}
simpleCalculator (12,

    19,
    
    'add')