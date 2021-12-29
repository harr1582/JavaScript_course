//In lesson Exercises

/*let country = 'United States'
let continent = 'North America'
let population = 333712
console.log(country, continent, population)
let ISISLAND = false
let language = 'English'
let halfPop = (population / 2)
let description = ` ${country} is in ${continent}, and its ${population} people speak ${language}.`
console.log(description)

if (population > 33000000) {
    console.log(`${country}'s population is above average.`);
} else { console.log(`${country}'s population is` + (33000000 - population) + `below average.`); }

if (population < 50000000 && language === 'English' && ISISLAND === false) { console.log('You should live in the US!') } else { console.log(`Don't live in the US, hunny.`) }
*/

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
let dolphinsAve = (97 + 112 + 101) / 3
let koalasAve = (109 + 95 + 106) / 3


if ((dolphinsAve > koalasAve) && dolphinsAve > 100) {
    console.log(`Dolphins win!`);
}
else if ((dolphinsAve < koalasAve) && koalasAve > 100) {
    console.log(`Koalas win!`);
}
else if ((dolphinsAve === koalasAve) && (dolphinsAve > 100)) {
    console.log(`We have a draw!`)
}
else {
    console.log(`No clear victor. Points not enough!`);
}