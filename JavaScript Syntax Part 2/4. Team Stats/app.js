/*jshint esversion: 6 */

const team = {
  _players: [
    {
      firstName: "Amir",
      lastName: "Izham",
      age: 27,
    },
    {
      firstName: "Ashraf",
      lastName: "Ahmad",
      age: 21,
    },
    {
      firstName: "Miraz",
      lastName: "Ruff",
      age: 31,
    },
  ],
  _games: [
    {
      opponent: "Man Utd",
      teamPoints: 1,
      opponentPoints: 2,
    },
    {
      opponent: "Chelsea",
      teamPoints: 2,
      opponentPoints: 1,
    },
    {
      opponent: "Liverpool",
      teamPoints: 3,
      opponentPoints: 0,
    },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(newPlayer);
  },

  addGames(newOpponent, newTeamPoints, newOpponentPoints) {
    let newGame = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };

    this._games.push(newGame);
  },
};
