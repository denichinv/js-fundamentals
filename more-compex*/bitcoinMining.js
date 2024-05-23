function bitcoinMining(arr) {
let bitcoinCount = 0;
let firstBitcoinDay = 0;
let totalMoney = 0;
let currDay = 1;


for (let index = 0; index < arr.length; index++) {
   let gold = arr[index];

   if (currDay % 3 === 0){
    gold *=0.7; 
   }

   let moneyFromGold = gold * 67.51;

   totalMoney += moneyFromGold

   while(totalMoney >= 11949.16 ){

      if (bitcoinCount === 0){

         firstBitcoinDay = currDay

      }
    bitcoinCount++;
    totalMoney -= 11949.16;
   }
    
   currDay++

}
console.log(`Bought bitcoins: ${bitcoinCount}`);
if (bitcoinCount > 0){

   console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);

}
 console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining ([100, 200, 300])