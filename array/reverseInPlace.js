function ReverseInPlace(arr) {

   let reversedArr = "";

   for (let i = arr.length - 1 ; i>= 0; i--) {
    const char = arr[i];
    reversedArr += char + " "
   }
    console.log(reversedArr);
}
ReverseInPlace(['a', 'b', 'c', 'd', 'e'])

console.log('-----------------');

function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        swapElements(arr, i, arr.length - 1 - i);
    }
    console.log(arr.join(' '));

    function swapElements(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

reverse([1, 2, 3, 4, 5]);  
