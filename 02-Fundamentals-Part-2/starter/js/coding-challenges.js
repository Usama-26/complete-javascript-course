 /*
   #############################
   ## 5. CODING CHALLENGE - 1 ##
   #############################
*/

const score_koala_1 = 23;
const score_koala_2 = 34;
const score_koala_3 = 27;

const score_dolphins_1 = 85;
const score_dolphins_2 = 54;
const score_dolphins_3 = 41;
/* 

const score_koala_1 = 65;
const score_koala_2 = 54;
const score_koala_3 = 49;

const score_dolphins_1 = 44;
const score_dolphins_2 = 23;
const score_dolphins_3 = 71; */

let calcAverage = (score_1, score_2, score_3) => (score_1 + score_2 + score_3 ) / 3;

const avgKoalas = calcAverage(score_koala_1, score_koala_2, score_koala_3);
const avgDolphins = calcAverage(score_dolphins_1, score_dolphins_2, score_dolphins_3);

function checkWinner(averageScoreKoalas, averageScoreDolphins) {
    if (averageScoreKoalas >= averageScoreDolphins * 2){
        return `Koalas wins (${averageScoreKoalas} vs. ${averageScoreDolphins}) `;
    }
    else if (averageScoreDolphins >= averageScoreKoalas * 2){
        return `Dolphins wins (${averageScoreDolphins} vs. ${averageScoreKoalas}) `;
    }
    else {
        return `No team wins`;
    }
    
}

console.log(checkWinner(avgKoalas, avgDolphins));

 /*
   #############################
   ## 7. CODING CHALLENGE - 2 ##
   #############################
*/

function calcTip(bills) {
    /* let tip;
    if (bill >= 50 && bill <=300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.20;
    }
    return tip; */
    return bills >=50 && bills <=300 ? bills * 0.15 : bills * 0.20; 
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);


/*
   ##############################
   ## 12. CODING CHALLENGE - 3 ##
   ##############################
*/

const mark = {
    fullName: 'Mark Miller',
    mass: '78',
    height: '1.69',
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }

}

const john = {
    fullName: 'John Smith',
    mass: '92',
    height: '1.95',
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }

}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName} has a higher BMI (${mark.BMI}) than ${john.fullName}'s BMI(${john.BMI})`);
}
else {
    console.log(`${john.fullName} has a higher BMI (${john.BMI}) than ${mark.fullName}'s BMI(${mark.BMI})`);
}

/*
   ##############################
   ## 17. CODING CHALLENGE - 4 ##
   ##############################
*/

const newBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const newTips = [];
const newTotals = [];

for (let i = 0; i < newBills.length; i++) {

    console.log(newBills[i]);
    newTips.push(calcTip(newBills[i]));
    newTotals.push(newBills[i] + newTips[i]);


}

console.log(newTips);
console.log(newTotals);

//BONUS:

function calcTotalAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        // console.log(sum);
    }

    return sum / arr.length;
}

const TotalsAverage = calcTotalAverage(newTotals);
console.log("Average of Totals :" + TotalsAverage);