/*
   #############################
   ## 6. CODING CHALLENGE - 1 ##
   #############################
*/
/* const marksMass = 78;
const marksHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95; */

const marksMass = 95;
const marksHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const marksBMI = marksMass / marksHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log (marksBMI, johnBMI);

marksHeigherBMI = marksBMI > johnBMI;
console.log(marksHeigherBMI);

/*
   #############################
   ## 9. CODING CHALLENGE - 2 ##
   #############################
*/

if (marksBMI > johnBMI) {
  console.log(`Mark's BMI ${marksBMI} is higher than John's! ${johnBMI}`);
}
else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's! ${marksBMI}`);
}
/*
   ##############################
   ## 14. CODING CHALLENGE - 3 ##
   ##############################
*/

// Challenge - 1, - 2 , BONUS:1 , BONUS:2

const score_dolphins = 97 + 112 + 101;
const score_koalas = 109 + 95 + 106;
const min_requirements = 100;
const averageScore_dolphins = score_dolphins / 3;
const averageScore_koalas = score_koalas / 3;

console.log(score_dolphins);
console.log(score_koalas);

if ( averageScore_dolphins > averageScore_koalas && score_dolphins > min_requirements) {
  console.log(`Dolphins wins the match with average score ${averageScore_dolphins}`);

}else if(averageScore_koalas > averageScore_dolphins && score_koalas > min_requirements) {
  console.log (`Koalas wins the match with average score ${averageScore_koalas}`);

}else if(score_koalas === score_dolphins && score_koalas >= min_requirements && score_dolphins >=100) {
  console.log(`Match withdraw. Both teams go home.`);

}else {
  console.log("No team wins the trophy. Good Game!");
}

/*
   #############################
   ## 17. CODING CHALLENGE -4 ##
   #############################
*/

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`Tip : ${tip}`);
console.log(`Total Bill: ${bill + tip}`);