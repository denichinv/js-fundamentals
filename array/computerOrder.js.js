function computerStore(arr) {
    let taxes = 0;
    let result = 0;
  
    for (const item of arr) {
      if (item === "special" || item === "regular") {
        break;
      }
  
      let sum = Number(item);
      if (sum < 0) {
        console.log("Invalid price!");
        continue;
      }
  
      result += sum;
      taxes += sum * 0.2;
    }
  
    if (result === 0) {
      console.log("Invalid order!");
    } else {
      let totalPrice = result + taxes;
      if (arr.includes("special")) {
        totalPrice -= totalPrice * 0.1;
      }
  
      console.log("Congratulations you've just bought a new computer!");
      console.log(`Price without taxes: ${result.toFixed(2)}$`);
      console.log(`Taxes: ${taxes.toFixed(2)}$`);
      console.log('-----------');
      console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
  }
  
  
  

computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
