function SumEvenNum(arr) {

    let result = 0;

    for (const num of arr) {

        if (num % 2 === 0){

            result += Number(num)

        }
        
    }
    console.log( result);
}

SumEvenNum(['1','2','3','4','5','6'])