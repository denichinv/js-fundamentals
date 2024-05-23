function triangleOfNums(n) {
  for (let i = 1; i <= n; i++) {
    let numAsString = "";

    for (let j = 1; j <= i; j++) {
      numAsString += i + " ";
    }

    console.log(numAsString);
  }
  
}
triangleOfNums(20);
