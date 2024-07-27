function softUniBarIncome(arr) {
  let pattern =
    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^\d|$%.]*(?<price>\d+\.?\d+)\$/;

  let totalPrice = 0;

  let customerOrder = arr.shift();

  while (customerOrder !== "end of shift") {
    let productInfo = customerOrder.match(pattern);

    if (productInfo) {
      let currentTotal =
        Number(productInfo.groups.count) * Number(productInfo.groups.price);
      totalPrice += currentTotal;

      console.log(
        `${productInfo.groups.customer}: ${
          productInfo.groups.product
        } - ${currentTotal.toFixed(2)}`
      );
    }

    customerOrder = arr.shift();
  }

  console.log(`Total income: ${totalPrice.toFixed(2)}`);
}

softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
