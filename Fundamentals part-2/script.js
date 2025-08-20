// Functon:

/*
function fruitJuice(apples,oranges){
    // console.log(apples,oranges);
    const Juice=`Juice of ${apples} apples and ${oranges} oranges.`;
    return Juice;
}
const Liquor = fruitJuice(5,0);
console.log(Liquor);

const orangeJuice = fruitJuice(3,5);
console.log(orangeJuice);


// Function Declarations

function calAge1( birthYear ){
      return  2025 - birthYear ;
} 
const age1 = calAge1(2002);
console.log(age1);

// Function Expression 

const Age2 = function (birthYear) {
    return 2025 - birthYear;
}
const age2 = Age2(1998);
console.log(age2);
*/

//Arrow Functions

// const calAge3 = birthYear => 2025 - birthYear;
// const age3 = calAge3(1996);
// console.log(age3); // for one parameter

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2025 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, "Bob"));

// //Functions in a Functions;

// function cutPiesces(fruit) {
//   return fruit / 4;
// }
// function juiceFruits(apples, oranges) {
//   const applesPie = cutPiesces(apples);
//   const orangesPie = cutPiesces(oranges);
//   const juice = ` JUice of ${applesPie} Apples and ${orangesPie} Oranges.`;
//   return juice;
// }
// console.log(juiceFruits(2, 3));

//Challenge-1 :

// const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;
// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);
// // checkWinner(scoreDolphins,scoreKoalas)
// function checkWinner(avgDolphins,avgKoalas){
//     if (avgDolphins > avgKoalas*2){
//         console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas})`);
//     }else if (avgKoalas > avgDolphins*2){
//         console.log(`Koalas win (${avgkoalas} vs ${avgDolphins})`);
//     }else{
//         console.log('NO team wins');
//     }
// }
// console.log(scoreDolphins,scoreKoalas)
// checkWinner(scoreDolphins,scoreKoalas);

//challenge-2 :

// function calcTip(bills) {
//   if (bills >= 50 && bills <= 300){
//     return bills*0.15;
//   }else{
//     return bills*0.20;
//   }
// }
// const bills=[125,255,244];
// const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];

// const totals = (tips[0],tips[1],tips[2]);
// console.log(`Total value is ${totals} which you have to pay. Danke!`);

//challenge - 3:

const mark = {
  fullName: "Mark Miller",
  mass: 78, // mass in kg
  height: 1.69, // height in meters
  calcBMI: function () {
    this.bmi = (this.mass / this.height) * this.height;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92, // mass in kg
  height: 1.95, // height in meters
  calcBMI: function () {
    this.bmi = (this.mass / this.height) * this.height;
    return this.bmi;
  },
};

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName} BMI ${mark.calcBMI()} is higher than ${
      john.fullName
    } (${john.calcBMI()})!`
  );
} else {
  console.log(
    `"${john.fullName} BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    } (${mark.calcBMI()})!"`
  );
}

// const jonas = {
//   firstName : "Jonas",
//   lastName : 'Smith',
//   birthyear : 1991,
//   job : 'Freelancer',
//   friends : ['Daniel','Frenando','jiyan'],
//   hasDriverLicense : true,
//   calcAge : function(){
//     console.log(this)
//     return 2025 - this.birthyear;
//   }
// };
// console.log(jonas.calcAge())
// // console.log(jonas.calcAge(1991))

// for (let reps = 1; reps <= 14 ; reps = reps + 1){
//   console.log(`Yes, It is your ${reps}. You can do it. 💫`)
// }

//challenge -4 :

const Bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calculate = function (Bills) {
  return Bills >= 50 && Bills <= 300 ? Bills * 0.15 : Bills * 0.2;
};

for (let i = 0; i <= Bills.length; i++) {
  const tiip = calculate(Bills[i]);
  tips.push(tiip);
  totals.push(tiip + Bills[i]);
}
console.log("Tips are:", tips);
console.log("Total = ", totals);

//bonus:

const calculateAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  // return sum / arr.length;
};
// console.log(calculateAvg[2,4,6])
// console.log(calculateAvg[tips]);
// console.log(calculateAvg[totals]);

// let rep = 1;
// while ( rep <= 10 ){
//   console.log(`Lifting weight rep ${rep}`);
//   rep ++;
// }6
let dice = Math.random() * 6;
// let Dice = Math.trunc(Math.random()*6)+1;
// console.log(dice);
// console.log(Dice);

while (dice !== 6) {
  console.log(`You rolled a dice which gives u a value of ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`The number is not 6`);
    continue;
  } else {
    console.log(`We get the same value as in dice which is ${dice}`);
  }
}




