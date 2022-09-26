//WARM UP: EXERCISE 1
/*
const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange']; {
    console.log(fruits[2], fruits[3], fruits[5], fruits[0])
}
 //Replace apple with raspberry and fig with pineapple

fruits.splice(1, 1, "raspberry");
    {
    console.log(fruits) }

fruits.splice(4,1,"pineapple");
    {
    console.log(fruits) }

//
const names = ['Peter', 'Susan', 'Charlotte'];
const lastElementInTheArray = names[2];
console.log(lastElementInTheArray);


const moreNames = ['Peter', 'Susan', 'Charlotte', 'Abdullah'];
const lastElementInTheAbdullah = moreNames[3];
console.log(lastElementInTheAbdullah);


// Group Ex - 1
const ourNames = ["Abdul", "Azra", "Nicklas", "Mads"];
let antal = ourNames.length
for (let i = 0; i < antal; i++)
    console.log(ourNames[i]);

// Ex 2
const ourNumbers = [1, 2, 3, 4, 5]
let sum = 0;

for (let i = 0; i < ourNumbers.length; i++) {
    sum += ourNumbers[i];
}
console.log(sum / ourNumbers.length)

// Ex 3
let fiveStrings = ["Computer", "Telefon", "Tablet", "Konsol", "TV"];
let emptyStrings = []

for (let i = 0; i < fiveStrings.length; i++) {
    if (fiveStrings[i].length <=3){
        emptyStrings.push(fiveStrings[i]);
    }
}
console.log(emptyStrings);
*/

/*
// EXERCISE 20-09-2022
//level 1.0
function logString(word) {
    console.log(word)
}
logString("hej hej")


//level 1.1
function calcNumber(calc) {
    console.log(calc)
}
calcNumber(4 + 4)


// level 1.2
function nameTrue(name) {
    if (name.charAt(0) === "a") (
        console.log(true)
    )
    else (
        console.log(false)
    )
}
nameTrue("inna");


//level 1.3
function celciusToFahrenheit(celcius) {
    const convertedTemperature = ((celcius * 1.8) + 32)
    return `${convertedTemperature} degree fahrenheit`
}
console.log(celciusToFahrenheit(30));

//level 2.4
function increasedByHalf(number) {
    const halfNumber = (number * 1.5)
    return `${halfNumber}`
}
console.log(increasedByHalf(50));

//level 2.6
function logString(stringToLog, numberOfTimesLog) {
    for (let i = 0; i < numberOfTimesLog; i++) {
        console.log(stringToLog)
    }
}
logString("hello", 3);

//level 2.7

function dateFormat(date) {
    const splittedDate = date.split("/")
    const reformattedDate = splittedDate[1]+"-"+splittedDate[0]+"-"+splittedDate[2]
    console.log(reformattedDate)
}
dateFormat("12/24/2022")

*/

/* EXERCISES 21-09-2022

//Create a sum function using only arrow functions
function calc(a, b) {
    const sumOf = (a+b)
    return sumOf
}
console.log(calc(10, 20))

//Only arrows
sum = (a, b) => {
    return(a+b)
}
let x = sum (4, 5)
console.log(x)


// Ex 2.1
function threeNum(num1, num2, num3) {
    const sumOf = num1+num2+num3
    return sumOf
}
console.log(threeNum(5, 0, 15))

//Ex 3.1
function emojiName(name) {
    const emoji = name + "🔐"
    return emoji
}
console.log(emojiName("Nicklas"))

//Ex 4.1
function uppercaseString(string) {
    const upCase = string
    return upCase.toUpperCase(string)
}
console.log(uppercaseString("kea"))

//Ex 6.1
function questionMark(string) {
    const sentence = string
    if (sentence.endsWith("?"))
        return true
    else
        return false
}
console.log(questionMark("wasup?"));

/*  
Console.log emits a message to your browsers Console,
and is usually used to emit debugging messages (research your browser's developer tools)

return is a keyword that terminates a function
and possibly returns a value to the caller of that function.

// Ex 8.2
// setInterval(stopWatch, 2000);
// let text = 0
// function stopWatch() {
//    document.write(text++)
//    console.log(text) }

// Ex 9.2
function ghosts(numGhost) {
    const printGhost = "👻"
    return printGhost.repeat(numGhost)
}
console.log(ghosts(5))
*/
/*
// EXERCISE 22-09-2022

// EX 1.1
const kitten = {
    furColor: "orange",
    age: 23
};

const laptop = {
    brand: "Lenovo",
    ram: "5GB"
}

const phone = {
    operatingSystem: "iOS",
    hasStylus: true,
    megapixels: 12,
    batteryLife: "24 hours"
}

// EX 1.2

const nicklas = {
    name: "Nicklas",
    age: 24,
    school: "KEA"
}

// EX 1.3
// console.log the values of each property of "kitten"
let kittens = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown"
}
console.log(kittens.ageMonths)

// EX 1.4
const dog = {
    name: "Billy",
    wantsToPlay: false
};
dog.name = "Rex"
dog.wantsToPlay = true
console.log(dog.name);
console.log(dog.wantsToPlay);

// EX 1.5

const astronautsInSpace = {
    people: [
        {
            name: "Oleg Artemyev",
            craft: "ISS"
        },
        {
            name: "Denis Matveev",
            craft: "ISS"
        },
        {
            name: "Sergey Korsakov",
            craft: "ISS"
        },
        {
            name: "Kjell Lindgren",
            craft: "ISS"
        },
        {
            name: "Bob Hines",
            craft: "ISS"
        },
        {
            name: "Samantha Cristoforetti",
            craft: "ISS"
        },
        {
            name: "Jessica Watkins",
            craft: "ISS"
        },
        {
            name: "Cai Xuzhe",
            craft: "Tiangong"
        },
        {
            name: "Chen Dong",
            craft: "Tiangong"
        },
        {
            name: "Liu Yang",
            craft: "Tiangong"
        }
    ],
    message: "success"
}
let keyToArray = Object.keys(astronautsInSpace.people)
let spacePeople = keyToArray.length
console.log(spacePeople)

let lastPersonCraft = astronautsInSpace.people[9].craft
console.log(lastPersonCraft)

let splitName = astronautsInSpace.people[0].name.split(" ")
let lastName = splitName.pop()
console.log(lastName)
*/

// HAND IN
// 1. What to wear 

function whatToWear(temp) {
    const temperature = temp
    if (temperature > 20)
        return "shorts and t-shirt"
    else
        return "jacket and long pants"
}
console.log(whatToWear(19))

// 2. Dice Game

function rollDice(numOfRolls) {
    let amountOfSix = 0
    for (let i = 0; i < numOfRolls; i++) {
        let randomNumber = Math.floor(Math.random()*6) + 1

        if (randomNumber === 6)
           console.log("You just hit "+randomNumber+"!")
        else
            console.log("You hit "+randomNumber+"... try again.");

        if (randomNumber === 6) {
             amountOfSix++
            if (amountOfSix === numOfRolls)
                console.log("JACKPOT");
        }

    }

}
rollDice(2);


// 3. Sentiment analyzer - NOT DONE...

function sentimentAnalyzer(stringText) {
    const positive = ["good", "awesome", "happy"]
    const negative = ["bad", "down", "wired", "sad"]

    let score = 0
    stringText.split(" ")
    {
    if (stringText === stringText.includes(positive))
        console.log(3);
    else (stringText === stringText.includes(negative))
        console.log(0);
    }
}
sentimentAnalyzer("I'm feeling good");
