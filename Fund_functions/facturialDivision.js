function factorialDivision(num1, num2) {
  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  let factorial1 = factorial(num1);
  let factorial2 = factorial(num2);

  function divideFactorials(a, b) {
    return (a / b).toFixed(2);
  }

  let result = divideFactorials(factorial1, factorial2);
  console.log(result);

  
}

factorialDivision(6, 2);
