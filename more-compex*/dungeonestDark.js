function dungeonDark(array) {
    let roomsAsString = array[0];
    let rooms = roomsAsString.split("|");
    let health = 100;
    let coins = 0;
    let roomCounter = 0;

    for (let room of rooms) {
        roomCounter++;
        let roomElements = room.split(" ");
        let itemOrMonster = roomElements[0];
        let DamageCoinOrPotion = Number(roomElements[1]);

        if (itemOrMonster === "potion") {
            let healedAmount = Math.min(100 - health, DamageCoinOrPotion);
            health += healedAmount;
            console.log(`You healed for ${healedAmount} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (itemOrMonster === "chest") {
            coins += DamageCoinOrPotion;
            console.log(`You found ${DamageCoinOrPotion} coins.`);
        } else {
            health -= DamageCoinOrPotion;
            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }
        }
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
