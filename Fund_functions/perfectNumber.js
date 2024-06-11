function perfectNumber(num) {
    
    function findProperDivisors(a) {

        let divisorsSum = 0;
        for (let divisor = a - 1; divisor >= 1; divisor--) {
           let curDivisor =  divisor

           if (a % curDivisor === 0 ) {
               
             divisorsSum += curDivisor
           }
        }
        return divisorsSum
    }
    

    function isPerfect(a, b) {
        if (a === b) {
            console.log("We have a perfect number!");
            return true;
        } else {
            console.log("It's not so perfect.");
            return false;
        }
    }
     
    
    const properDivisors = findProperDivisors(num)
    const result = isPerfect(num, properDivisors)
    
}
perfectNumber (28)