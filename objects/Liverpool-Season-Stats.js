const team = {
  _players: [
    { firstName: "Roberto", lastName: "Firmino", age: 31 },
    { firstName: "Mohammed", lastName: "Salah", age: 32 },
    { firstName: "Sadio", lastName: "Mane", age: 33 },
  ],

  _games: [
    { opponent: "Manchester City", teamGoals: 2, opponentsGoals: 1 },
    { opponent: "Manchester United", teamGoals: 3, opponentsGoals: 0 },
    { opponent: "Chelsea", teamGoals: 2, opponentsGoals: 0 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(newPlayer);
  },

  addGame(newOpponent, newTeamGoals, newOpponentGoals) {
    const newGame = {
       opponent: newOpponent,
      teamGoals: newTeamGoals,
      opponentGoals: newOpponentGoals,
    };
    this._games.push(newGame);
  },
};

team.addPlayer("Alisson", "Becker", 31);
team.addGame('Aston Villa', 3, 1)

console.log(team.players);

console.log(team.games);
