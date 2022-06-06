'use strict';
/* 
############################
## 7.CODING CHALLENGE - 1 ##
############################
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);
// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3.
const [...allPlayers] = [...players1, ...players2];
console.log(allPlayers);
// 4.
const players1Final = [...players1, 'Thiago', 'Countinho', 'Perisic'];
console.log(players1Final);
// 5.
let { team1, x: draw, team2 } = { ...game.odds };
console.log(team1, draw, team2);
// 6.
const printGoals = function (...playerNames) {
  console.log(playerNames);
  console.log(`${playerNames.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
// 7.
team1 < team2 && console.log('Team 1 is more likely to win');

team1 > team2 && console.log('Team 2 is more likely to win');

/* 
#############################
## 12.CODING CHALLENGE - 2 ##
#############################
*/
// 1.
for (const [goalNumber, scorer] of game.scored.entries()) {
  console.log(`Goal ${goalNumber + 1}: ${scorer}`);
}

// 2.
const odds = Object.values(game.odds);
let sumOdds = 0;
for (const i of odds) {
  sumOdds += i;
}
console.log(`Average Odd is: ${sumOdds / odds.length}`);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === draw ? `draw` : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
// 4.
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

/* 
#############################
## 16.CODING CHALLENGE - 3 ##
#############################
*/
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
// gameEvents.delete(64);
// console.log(gameEvents);
// 3.
const time = [...gameEvents.keys()].pop();

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// 4.
for (const [key, value] of gameEvents) {
  console.log(
    `${
      key <= 45
        ? `[FIRST HALF] ${key + ':' + value}`
        : `[SECOND HALF] ${key + ':' + value}`
    }`
  );
}
/* 
#############################
## 20.CODING CHALLENGE - 4 ##
#############################
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const userInput = document.querySelector('textarea').value;
  const splitArray = userInput.split('_');
  const camelCase = splitArray[splitArray.length - 1];
  console.log(camelCase[0].toUpperCase());
  
})
