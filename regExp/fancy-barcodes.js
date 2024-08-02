function fancyBarcode(arr) {
  let pattern = /^@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+$/;
  let n = arr.shift();

  let i = 0;

  for (const barcode of arr) {
    let test = pattern.test(barcode);
    let productGroup = 0;
    if (test) {
      productGroup = barcode.match(/\d/g);
      if (productGroup === null) {
        productGroup = "00";
      } else {
        productGroup = productGroup.join("");
      }
      console.log(`Product group: ${productGroup}`);
    } else {
      console.log("Invalid barcode");
    }
  }
}
fancyBarcode(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
