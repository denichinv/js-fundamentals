function SpiceMustFLow(startingYield) {
  let totalAmount = 0;
  let dayCounter = 0;

  while (startingYield >= 100) {
    dayCounter++;
    totalAmount += startingYield;
    totalAmount -= 26;
    startingYield -= 10;
  }
  if (startingYield > 0) {
    totalAmount -= 26;
  }
  totalAmount = Math.max(totalAmount, 0)
  console.log(dayCounter);
  console.log(totalAmount);
}
SpiceMustFLow(111);
