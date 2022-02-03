'use strict';

// function describeCountry(country, population, capitalCity) {
//     const descriptor = `${country} has ${population} people and its capital city is ${capitalCity}.`
//     return descriptor
// }

// const US = describeCountry(`US`, `333million`, `Washington DC`)
// console.log(US)

// const India = describeCountry('India', '1 billion', 'Delhi')

// const France = describeCountry('France', '67 million', 'Paris')

///////////////////////////////////
//FUNCTION DECLARATION


// function percentageOfWorld1(population) {
//     return ((population / 7753000000) * 100)
// }

// const US = percentageOfWorld1(334000000)
// console.log(US)

//FUNCTION EXPRESSION

// const US2 = function (population) {
//     return ((population / 7753000000) * 100)
// }
// console.log(US2(333000000), '%')

//Arrow Function <---not loving this

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


//Functions Calling other Functions
// function percentageOfWorld1(population) {
//     return ((population / 7753000000) * 100)
// }

// function describePopulation(country, pop) {
//     const percPop = percentageOfWorld1(pop)

//     const countryStatement = `${country} has ${pop} people, which is about ${percPop}% of the world.`
//     return countryStatement
// }

// console.log(describePopulation('India', 1000000000))


//Coding challenge 1

//Function declaration
// function calcAverage(score1, score2, score3) {
//     return ((score1 + score2 + score3) / 3);
// }

// //Function expression
// const constName = function (score1, score2, score3) {
//     return ((score1 + score2 + score3) / 3);
// }
// console.log(constName(2, 5, 7))
//Arrow function -- I think I get it now?

// const calcAve = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

// const dolphAve = calcAve(85, 54, 41)
// const koalAve = calcAve(23, 34, 27)


// console.log(`The dolphin's ave is ${dolphAve}`);
// console.log(`The koala's ave is ${koalAve}`);


// function checkWinner(dolph1, dolph2, dolph3, ko1, ko2, ko3) {
//     const dolphAveScore = dolphAve(dolph1, dolph2, dolph3)
//     const koalAveScore = koalAve(ko1, ko2, ko3)
//     if (dolphAveScore >= (koalAveScore * 2)) {
//         console.log(`Dolphins smoked Koalas ${dolphAveScore} vs ${koalAveScore}`)
//     }
//     else if (koalAveScore >= (dolphAveScore * 2)) {
//         console.log(`Koalas smoked Dolphins ${koalAveScore} vs ${dolphAveScore}`)
//     }
//     else {
//         console.log(`Everyone is a loser.`)
//     }
// }

// checkWinner(44, 23, 71, 65, 54, 49)
// checkWinner(85, 54, 41, 23, 34, 27)


//shorter, better:
// const calcAve = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphAve = calcAve(85, 54, 41)
// const koalAve = calcAve(23, 34, 27)

// const checkWinner2 = function (avgDolph, avgKo) {
//     if (avgDolph >= (2 * avgKo)) {
//         console.log(`Dolphs win`)
//     }
//     else if (avgKo >= (2 * avgDolph)) {
//         console.log('Kos win')
//     }
//     else { console.log('losers') }
// }
// checkWinner2(dolphAve, koalAve)

//Arrays

// const populations = [333000000, 1000000000, 59550000, 47350000]
// //if (populations.length = 4) { console.log('True') } else { console.log('False') }

// function percentageOfWorld1(population) {
//     return ((population / 7753000000) * 100)
// }
// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]

// console.log(populations)
// console.log(percentages)

//Array Operations

// const neighbors = ['Mexico', 'Canada']

// //Add element to array
// neighbors.push('Utopia')
// console.log(neighbors)

// //Remove Utopia from array
// neighbors.pop()
// console.log(neighbors)

// if (neighbors.includes('Germany')) { console.log('Probably Central European') } else { console.log('Probably not a central European Country') }

// console.log(neighbors.indexOf('Canada'))

// neighbors[1] = 'NORTHcAnada'
// console.log(neighbors)

//Coding Challenge 2

// const check = 430;
// const tip = .15 * check;
// const tip2 = .20 * check;

// if (50 <= check <= 300) {
//     console.log(`The bill was ${check}, the tip was ${tip}, and the total value was ${check + tip}`);
// } else {
//     console.log(`The bill was ${check}, the tip was ${tip2}, and the total value was ${check + tip2}`);
// }

// function calcTip(check) {

//     if (50 <= check <= 300) {
//         const tip = (check * .15);
//         return (tip + check);
//     } else {
//         const tip = (check * .20);
//         return (tip + check);
//     }
// }
// console.log(calcTip(100))

// const bills = [125, 555, 44]
// const totals = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const tips = [calcTip(bills[0]) - (bills[0]), calcTip(bills[1]) - (bills[1]), calcTip(bills[2]) - (bills[2])]
// console.log(bills)
// console.log(totals)
// console.log(tips)

// //I forgot about the ? to return true/false:

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// Objects - define key value pairs. Use curly brackets

//Object literals
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1989,
//     job: 'teacher',
//     friends: ['Steve', 'Lexy', 'Sarah'],
//     hasDriverslicense: true,
//     calcAge: function () {
//         //console.log(this);
//         return 2022 - this.birthYear;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old who has ${this.hasDriverslicense ? `a` : 'no'} driver's license.` //need to have the parentheses after functions
//     }

// };

// console.log(jonas.getSummary())
// console.log(`${jonas.firstName} is a ${jonas.calcAge()} year old who has ${jonas.license} driver's license`)


//Getting items from objects
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(nameKey)
// console.log(jonas[`first` + nameKey])
//This translates to console.log(jonas[firstName])

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// console.log(`${jonas.firstName} has ${jonas['friends'].length} friends, and his best friend is ${jonas.friends[0]}`)



/////////////////////////////////////////////////////////////////////////////


// const myCountry = {
//     country: 'US',
//     capital: 'DC',
//     language: null,
//     population: 333000000,
//     neighbors: [`Mexico`, `Canada`],
//     describe: function () {
//         return `${this.country} has ${this.population} ${this.language} speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}`
//     },

// }

// console.log(myCountry.describe())

///////////////////////////////////////////////////////////////////////////
//Coding Challenge 3

// const Mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         return (this.mass / (this.height ** 2))
//     }

// }

// const John = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         return (this.mass / (this.height ** 2))
//     }

// }

// const highLow = John.calcBMI > Mark.calcBMI ? `higher` : `lower`

// console.log(`John's BMI (${John.calcBMI()}) is ${highLow} than Mark's (${Mark.calcBMI()}).`)

//The for loop

// for (let cap = 1; cap <= 50; cap++) {
//     console.log(`Voter number ${cap} is currently voting.`)
// }


// //Bring back the array
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     1989,
//     'teacher',
//     ['Steve', 'Lexy', 'Sarah'],
// ]

// //Make blank array to add stuff to later
// const types = [];

// // //Make for loop iterating over jonas array
// console.log(jonas[0])
// for (let i = 0; i < jonas.length; i++) {
//     //print each item and then it's type
//     console.log(jonas[i]); //typeof jonas[i]);

//     //Filling in array called types
//     //types[i] = typeof jonas[i];
//     //can also do this
//     types.push(typeof jonas[i]);
// }
//console.log(types);

// const years = [1991, 2007, 1989, 2020]
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2022 - years[i]);
// }
//console.log(ages)

//continue = skip/exit current iteration
//break = exit entire loop


//FOR LOOP ITERATING BY 1

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] == 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

//Can sub out break/continue to tell the difference

//Exercise: iterating on an array and incorporating a function
// LECTURE: Looping Arrays, Breaking and Continuing

// function percentageOfWorld1(population) {
//     return ((population / 7753000000) * 100);
// }

// const populations = [333000000, 1000000000, 59550000, 47350000];

// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]))
// }
// console.log(percentages2)

// From Lecture:

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end');
// }

// Exercise:  Looping Backwards and Loops in Loops


// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
//     'Russia']];



// for (let neigh = 0; neigh < listOfNeighbours.length; neigh++) {
//     for (let part = 0; part < listOfNeighbours[neigh].length; part++) {
//         console.log(`Neighboring country: ${listOfNeighbours[neigh][part]}`);
//     }
// }


//The While Loop Exercise

// function percentageOfWorld1(population) {
//     return ((population / 7753000000) * 100);
// }

// const populations = [333000000, 1000000000, 59550000, 47350000];


// const percentages3 = [];

// let i = 0
// while (i < populations.length) {
//     percentages3.push(percentageOfWorld1(populations[i]));
//     i++;
// }
// console.log(percentages3)

//Coding Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
]

let tips = []
let totals = []

let calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let i = 0
while (i < bills.length) {
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
    i++;
}
console.log(tips)
console.log(totals)
//////////////////////////////////
//Bonus
// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         //sum = arr[i] + sum;
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(calcAverage(totals))

//YAY DONE WITH THIS SECTION!