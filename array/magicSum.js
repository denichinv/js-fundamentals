function magicSum(array, sum) {
    for (let index = 0; index < array.length - 1; index++) {
        let currNum = array[index];

        for (let j = index + 1; j < array.length; j++) {
            let num2 = array[j];
            
            if (currNum + num2 === sum) {
                console.log(`${currNum} ${num2}`);
            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6],

    6)