function sumFirstLast(arr) {
    
    const firstElement = Number(arr.shift(1))
    const lastElement = Number(arr.pop(2))

    console.log(firstElement + lastElement);
    
}


sumFirstLast(['20', '30', '40'])