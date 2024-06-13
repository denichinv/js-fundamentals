function listOfProducts(arr) {

    const newArr = arr.sort()
    

    for (let index = 0; index < newArr.length; index++) {
        const item = arr[index];

        console.log(`${index + 1}.${item}`);
        
    }

}



listOfProducts(['Potatoes', 'Tomatoes', 'Onions','Apples'])