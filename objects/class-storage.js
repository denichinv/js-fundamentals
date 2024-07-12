class Storage {
constructor(capacity){
    this.capacity = capacity
    this.storage = []
    this.totalCost = 0;
}
addProduct(product){
this.storage.push(product)
this.capacity -= product.quantity
const totalProductPrice = product.price *product.quantity
this. totalCost += totalProductPrice
}
getProducts(){
    
    const result = []

for (const productObj of this.storage) {
    
   result.push(JSON.stringify(productObj));
}
return result.join('\n')
}
}













let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);



