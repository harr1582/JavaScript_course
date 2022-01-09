//In lesson Exercises

// let country = 'United States'
// let continent = 'North America'
// let population = 333712000
// console.log(country, continent, population)
// let ISISLAND = false
// let language = 'English'
// let halfPop = (population / 2)
// let description = ` ${country} is in ${continent}, and its ${population} people speak ${language}.`
//console.log(description)
//const average = 33000000


//********************If else statement

// if (population > 33000000) {
//     console.log(`${country}'s population is above average.`);
// } else { console.log(`${country}'s population is` + (33000000 - population) + `below average.`); }

// if (population < 50000000 && language === 'English' && ISISLAND === false) { console.log('You should live in the US!') } else { console.log(`Don't live in the US, hunny.`) }
// */

//************Template literal with Conditional Operator */

// console.log(`${country}'s population is ${population >= average ? 'above' : 'below'} average.`)




/*
const neighbor = Number(prompt('How many neighboring countries does your country have?'))

if (neighbor == 0) {
    console.log('Only one neighbor!')
}
else {
    console.log('Not 1 neighbor')
}
*/







//Coding Challenge 1
/*
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;


let markBMI = (markMass / (markHeight ** 2));
let johnBMI = (johnMass / (johnHeight ** 2));
let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);


//Coding Challenge 2
if (markHigherBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's${johnBMI}!`);
}
else {
    console.log(`John's BMI ${johnBMI}is higher than Mark's ${markHigherBMI}!`);
}
*/

//Coding Challenge 3
// let dolphinsAve = (97 + 112 + 101) / 3
// let koalasAve = (109 + 95 + 106) / 3


// if ((dolphinsAve > koalasAve) && dolphinsAve > 100) {
//     console.log(`Dolphins win!`);
// }
// else if ((dolphinsAve < koalasAve) && koalasAve > 100) {
//     console.log(`Koalas win!`);
// }
// else if ((dolphinsAve === koalasAve) && (dolphinsAve > 100)) {
//     console.log(`We have a draw!`)
// }
// else {
//     console.log(`No clear victor. Points not enough!`);
// }

//The switch statement -- written in if else format

// 
//The switch statement in action

// const language = 'English'

// switch (language) {
//     case ('Chinese'):
//     case ('Mandarin'):
//         console.log('Highest # of native speakers');
//         break;
//     case ('Spanish'):
//         console.log('2nd most native speakers');
//         break;
//     case ('English'):
//         console.log('3rd place');
//         break;
//     case ('Hindi'):
//         console.log('4th');
//         break;
//     case ('Arabic'):
//         console.log('5th');
//         break;
//     default:
//         console.log('Trash language');
// }


// Conditional (Ternary) Operators in Template literals
// age = 23
// age >= 18 ? console.log('booze') : console.log('juice');

// console.log(`I like to drink ${age >= 18 ? `booze` : `juice`}`);


//Coding Challenge 4
// const check = 430;
// const tip = .15 * check;
// const tip2 = .20 * check;

// if (50 <= check <= 300) {
//     console.log(`The bill was ${check}, the tip was ${tip}, and the total value was ${check + tip}`);
// } else {
//     console.log(`The bill was ${check}, the tip was ${tip2}, and the total value was ${check + tip2}`);
// }

//*********With switch statement */
// const check = 430
// const midTip = check * .15
// const bigTip = check * .20
// const midCheck = check + midTip
// const bigCheck = check + bigTip

// console.log(`The bill was ${check} the tip was ${check >= 50 && check <= 300 ? midTip : bigTip}, and the total value was ${check >= 50 && check <= 300 ? midCheck : bigCheck}`)

//OOORRRR,,, This is better
// const bill = 275
// const tip = bill <=300 && bill >=50 ? bill *.15 : bill *.2;
//Then print console sentence
///

