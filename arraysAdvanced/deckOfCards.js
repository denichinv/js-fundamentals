function deckOfCards(arr) {
  let listOfCards = arr.shift().split(", ");
  let numOfCommands = Number(arr.shift());

  for (let row of arr) {
    let tokens = row.split(", ");
    let command = tokens.shift();
    let cardNameOrIndex = tokens.shift();
    let cardName = tokens.shift();
    switch (command) {
      case "Add":
        if (!listOfCards.includes(cardNameOrIndex)) {
          listOfCards.push(cardNameOrIndex);
          console.log("Card successfully added");
        } else {
          console.log("Card is already in the deck");
        }
        break;
      case "Remove":
        if (!listOfCards.includes(cardNameOrIndex)) {
          console.log("Card not found");
        } else {
          let CardIndex = listOfCards.indexOf(cardNameOrIndex);
          listOfCards.splice(CardIndex, 1);
          console.log("Card successfully removed");
        }

        break;
      case "Remove At":
        let index = Number(cardNameOrIndex);
        if (index >= 0 && index < listOfCards.length) {
          listOfCards.splice(index, 1);
          console.log("Card successfully removed");
        } else {
          console.log("Index out of range");
        }
        break;
      case "Insert":
        let i = Number(cardNameOrIndex);
        if (i >= 0 && i < listOfCards.length) {
          if (listOfCards.includes(cardName)) {
            console.log("Card is already added");
          } else {
            listOfCards.splice(i, 0, cardName);
            console.log("Card successfully added");
          }
        } else {
          console.log("Index out of range");
        }

        break;
    }
  }
  console.log(listOfCards.join(", "));
}
deckOfCards(
  // ([
  //   "Ace of Diamonds, Queen of Hearts, King of Clubs",
  //   "3",
  //   "Add, King of Diamonds",
  //   "Insert, 2, Jack of Spades",
  //   "Remove, Ace of Diamonds",
  // ]);
  // Card successfully added
  // Card successfully added
  // Card successfully removed
  // Queen of Hearts, Jack of Spades, King of Clubs, King of Diamonds

  // (["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
  // "2",
  // "Add, Two of Clubs",
  // "Remove, Five of Hearts"])

  // Card is already in the deck
  // Card not found
  // Two of Clubs, King of Spades, Five of Spades, Jack of Hearts

  [
    "Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1",
  ]
);

// Index out of range
// Card successfully removed
// Jack of Spades, Jack of Clubs
