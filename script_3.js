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
const calcAve = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphAve = calcAve(85, 54, 41)
const koalAve = calcAve(23, 34, 27)

const checkWinner2 = function (avgDolph, avgKo) {
    if (avgDolph >= (2 * avgKo)) {
        console.log(`Dolphs win`)
    }
    else if (avgKo >= (2 * avgDolph)) {
        console.log('Kos win')
    }
    else { console.log('losers') }
}
checkWinner2(dolphAve, koalAve)