'use strict';

const dataJulia = [9, 16, 6, 8, 3];
const dataKate = [10, 5, 6, 1, 4];

const checkDogs = function (dataset1, dataset2) {
  const dataset1Corrected = dataset1.slice(1, -2);
  const combinedData = dataset1.concat(dataset1Corrected);
  combinedData.forEach((dogAge, i) => {
    // const checkAdult = dogAge > 3? 'Adult': 'Puppy';
    if (dogAge > 3)
      console.log(
        `Dog number ${i + 1} is an Adult and is ${dogAge} Years old.`
      );
    else console.log(`Dog number ${i + 1} is still a Puppy`);
  });
};

checkDogs(dataJulia, dataKate);

const dogsAges = [5, 2, 4, 1, 15, 8, 3];
const dogsAges2 = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge = function (ages) { 
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  const filtered = humanAges.filter(humanAge => humanAge > 18);
  return filtered.reduce((start, next) => start + next) / filtered.length;
};

const calcAverageHumanAgeArrow = function (ages) {
  const humanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(humanAge => humanAge > 18)
    .reduce((start, next, i, filteredArr) => start + next / filteredArr.length, 0);
return Math.trunc(humanAges)
  // return Math.trunc(humanAges / ages.length);
};
console.log(calcAverageHumanAgeArrow(dogsAges));
console.log(calcAverageHumanAgeArrow(dogsAges2));

