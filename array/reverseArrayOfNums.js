function ReverseArray(n, arr) {

newArr = [];
    for (let index = n - 1  ; index >= 0 ; index--){
         newArr.push(arr[index])
         
        }
        
        console.log(newArr);
    }
ReverseArray (3, [10, 20, 30, 40, 50])