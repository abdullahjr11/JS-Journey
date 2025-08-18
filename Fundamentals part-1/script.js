
let country='Pakistan';
let continent='Asia';
let population='225.22 M';

console.log(country);
console.log(continent);
console.log(population);



let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let Year;
console.log(Year);
console.log(typeof Year);

year=1991;
console.log(typeof year);

console.log(typeof null);


let Age=30;
age=31;

const now = 2035;
const ageJones = now - 2021;
const ageSarah = now - 2022;

console.log(ageJones, ageSarah);

console.log(ageJones * 2, ageJones / 10, 2 ** 3);

// // // Cancatenate Variables

const firstName = "jonas";
const lastName = "smith";
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// // // Assignment Operators

let x = 15 + 3; //18
x += 10; // x = x + 10
x *= 4;
x++; // x =x+1
x--; // x=x-1
x--;
console.log(x);

//Comparison Operators

console.log(ageJones > ageSarah);

const isFullAge = ageSarah >= 18;
console.log(now - 2021 > now - 2022);

// // //strings and Templates

const Name = "Abdullah";
const job = 'Unemployer';
const birthDate = 2002;
const year = 2025;
const Ab = "I'm " + Name + ", a " + ( year
- birthDate ) + ' year old ' + job + '!';
console.log(Ab);

// // // templates
const Aj = `I'm ${Name}, a ${year - birthDate} years old ${job}!`;
console.log(Aj);

console.log(`String with \nnew number of \nlines`);
console.log(`string witnh 
more line `);

// // // Descisons / if -Else;

const age = 12;
if(age>=18){
    console.log(`Rayan is applicable for driving license 🚗`);
    } else { 
        const yearsLeft = 18 - age;
        console.log(`Rayan has ${yearsLeft} years left for the applicable of Driver licensce.`)
    }


const birthYear = 1998;
let century;
if (birthYear >= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);

// // // Challenge 1
// // // Test Data - 1:

let massMarks = 78; // Mass in kg
let heightMarks = 1.69; //Height in meters
let marksBMI = massMarks / (heightMarks * heightMarks) ;

console.log("BMI",marksBMI);


let massJohn = 92; // Mass in kg
let heightJohn = 1.95 ; //Height in meters
let johnBMI = massJohn / (heightJohn * heightJohn);

console.log(johnBMI);

let markHigherBMI = marksBMI > johnBMI;
console.log(markHigherBMI);


// // //Test DATA - 2;

let weightMarks = 95; // Mass in kg
let tallMarks = 1.88; //Height in meters
let markBMI = weightMarks / (tallMarks * tallMarks);

console.log(markBMI);

let weightJohn = 85; // Mass in kg
let tallJohn = 1.76; //Height in meters
let johnsBMI = weightJohn / (tallJohn * tallJohn);

console.log(johnsBMI);

let markhigherBMI = markBMI > johnsBMI;
console.log(markhigherBMI);


// // // Challenge 2
// // // TestData-1

if (markBMI > johnBMI){
    console.log(`Mark's BMI which is ${marksBMI} higher then john's ${johnBMI}!`);
}


const fvrt = prompt("What is ur fvrt number?"); 
console.log(fvrt);
if (fvrt == 19) {
    console.log("Yah ur fvrt number is awesome!")
} else if (fvrt == 12) {
    console.log("Not a number")
};

// logical Operaors

const hasDriverLicense = true; // A
const hasGoodVision = false; //B

console.log( hasDriverLicense && hasGoodVision); // And Operator
console.log(hasDriverLicense || hasGoodVision); // Or operator
console.log(!hasDriverLicense); // Not operator

if (hasDriverLicense && hasGoodVision){
    console.log("Rayan should Drive.")
} else { 
    console.log(" Someone else can drive!")
}

// challenge-3

const ScoreDolphins = (96 + 108 + 89)/ 3;
console.log("Score = ", ScoreDolphins);
const ScoreKoalas = (88 + 91 + 110) / 3;
console.log("Score = ", ScoreKoalas);

if (ScoreDolphins > ScoreKoalas){
    console.log("Dolphins wins the throphy");
} else if (ScoreDolphins < ScoreKoalas) {
    console.log ("Koalas Wins the Throphy");
} else {
    console.log("Both Wins the Throphy.")
};

//Bonus-1
const scoreDolphins = (97 + 112 + 101)/ 3;
console.log("Score = ", scoreDolphins);
const scoreKoalas = (109 + 95 + 123) / 3;
console.log("Score = ", scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins wins the throphy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log ("Koalas Wins the Throphy");
}else if ( scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
    console.log('Both teams win')
}
 else {
    console.log("NO one  Wins the Throphy.")
};


//Switch Operator;

const day = 'Wednesday';
switch (day) {
    case 'monday':
        console.log("Prepare your sketches which you deliver to the client.")
        console.log("Everything will be fine if you quite.")
        break;
    case 'tuesday':
        console.log("What to do when there's a lot more to adapt.")
        break;
    default:
        console.log("Fuck OFF!")
}

// Conditional Operator 
// It is an operator which is similar to if/else statements. It also called territory operator.

const Aage=28;
Aage>=22 ? console.log( " You are eligible for sky diving! ") : console.log(" You are eligible only for jump skating! 😂");

const Confirmation = Aage >= 22 ? "Eligible for Sky-Diving" : "Not Eligible for Jump skating!"
console.log(Confirmation)

let ok;
if (Aage>=22){
    ok = 'Eligible'
} else { 
    ok = "Not Eligible"
}
console.log(ok);

// Challenge - 4
const bill = 275
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log('Tip = ',tip);
console.log('Bill =',bill);
console.log('Total = ',bill + tip);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}.Sir!`)

const z = 301;
if (z >= 50 && z <= 300){
    console.log(`Tip = ${z * 0.15} \nBill = ${z+z*0.15} `);
} else {
    console.log (`tip = ${z*0.2} \nBill = ${z+z*0.2}`);
}

