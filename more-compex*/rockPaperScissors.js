const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error! Wrong input - choose rock, paper or scissors!");
  }
};
// console.log(getUserChoice('Paper'));
// console.log(getUserChoice('fork'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};
// console.log(getComputerChoice())

const determineWinner = (getUserChoice, getComputerChoice) => {
  if (getComputerChoice === getUserChoice) {
    return "The game is a tie.";
  }

  if (getUserChoice === "rock") {
    if (getComputerChoice === "paper") {
      return "You loose!";
    } else {
      return "You won!";
    }
  }

  if (getUserChoice === "paper") {
    if (getComputerChoice === "scissors") {
      return "You loose!";
    } else {
      return "You won!";
    }
  }

  if (getUserChoice === "scissors") {
    if (getComputerChoice === "rock") {
      return "You loose!";
    } else {
      return "You won!";
    }
  }
  if (getUserChoice === "bomb") {
    return 'You won using a cheat code!'
  }
};

// console.log(determineWinner('paper', 'scissors'));

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw:" + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
