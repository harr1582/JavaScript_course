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


function percentageOfWorld1(population) {
    return ((population / 7753000000) * 100)
}

const US = percentageOfWorld1(334000000)
console.log(US)

//FUNCTION EXPRESSION

// const US2 = function (population) {
//     return ((population / 7753000000) * 100)
// }
// console.log(US2(333000000), '%')