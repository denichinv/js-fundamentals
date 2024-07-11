function storeProvision(arrCurrStock, arrOrderedStock) {
  let arr = [];
  for (let i = 0; i < arrCurrStock.length; i += 2) {
    let productStock = arrCurrStock[i];
    let qtyStock = Number(arrCurrStock[i + 1]);

    let productObj = { product: productStock, qty: qtyStock };
    arr.push(productObj);
  }

  for (let j = 0; j < arrOrderedStock.length; j += 2) {
    let productOrder = arrOrderedStock[j];
    let qtyOrder = Number(arrOrderedStock[j + 1]);

    let productFound = arr.find((p) => p.product === productOrder);

    if (productFound) {
      productFound.qty += qtyOrder;
    } else {
      let productObj = { product: productOrder, qty: qtyOrder };
      arr.push(productObj);
    }
  }

  for (const productObj of arr) {
    console.log(`${productObj.product} -> ${productObj.qty}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
