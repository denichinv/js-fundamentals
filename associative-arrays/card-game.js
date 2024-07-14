function cardGame(arr) {
  const powerValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  const typeValues = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  const personCards = {};

  for (const entry of arr) {
    const [person, cards] = entry.split(": ");
    const cardList = cards.split(", ");

    if (!personCards[person]) {
      personCards[person] = new Set();
    }

    for (const card of cardList) {
      personCards[person].add(card);
    }
  }

  const personValues = {};

  for (const [person, cardsSet] of Object.entries(personCards)) {
    let totalValue = 0;
    for (const card of cardsSet) {
      const power = card.slice(0, -1);
      const type = card.slice(-1);
      const powerValue = powerValues[power];
      const typeValue = typeValues[type];
      totalValue += powerValue * typeValue;
    }
    personValues[person] = totalValue;
  }

  for (const [person, value] of Object.entries(personValues)) {
    console.log(`${person}: ${value}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
