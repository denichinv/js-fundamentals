function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let totalExpenses = 0;
   let shieldReplaced  = 0;
  for (let fights = 1; fights <= lostFights; fights++) {
    let currFight = [fights];

    if (currFight % 2 === 0) {
      totalExpenses += helmetPrice;
    }
    if (currFight % 3 === 0) {
      totalExpenses += swordPrice;
    }
    if (currFight % 2 === 0 && currFight % 3 === 0 ){
        totalExpenses += shieldPrice
        shieldReplaced++
        if ( shieldReplaced % 2 === 0){
            totalExpenses += armorPrice
        }

    
    }
    

  }
  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(
  23,

  12.5,

  21.5,

  40,

  200
);
