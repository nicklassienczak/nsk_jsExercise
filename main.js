console.log("hello")



const name = "peter. ";
const words = "My name is ";
const endwords = "It has 5 characters";
console.log(words + name + endwords)
console.log(`My name is ${name}. It has ${name.length} characters`)


//Student/Teacher Percentage
let numberOfStudents = 26
let numberOfTeachers = 2
console.log(numberOfStudents + numberOfTeachers)

const totalNumber = numberOfStudents + numberOfTeachers
console.log(numberOfStudents * 100 / totalNumber + "%")

const studentPercentage = Math.round (numberOfStudents * 100 / totalNumber)
const teacherPercentage = Math.round (numberOfTeachers * 100 / totalNumber)
console.log(`Student Percentage: ${studentPercentage}%
Teacher Percentage: ${teacherPercentage}%`)

// ALTID START MED CONST. SÅ KAN DU ALTID ÆNDRE DET TIL LET

const PizzaName = "Kebab Pizza"
const PizzaPrice = 50
console.log(`New pizza order: ${PizzaName}. The price of the pizza is: ${PizzaPrice}`)

// Pizza Calculator
let amountOfPizza = 3
const familyPizza = false;
const totalPrice = (PizzaPrice * amountOfPizza)
console.log(`New Pizza Order: ${amountOfPizza}. Family Pizza: ${familyPizza}. Name of Pizza: ${PizzaName}. 
Total cost of the order is: ${totalPrice},- DKK`)

//Age Calculator
let yearOfBirth = 1998
let yearFuture = 2030
let age = (yearFuture - yearOfBirth)
console.log(`You are ${age} in ${yearFuture}`)

//Dog Age Calculator
let dogYearOfBirth = 2026
let dogYearFuture = 2030
const shouldShowResultInDogYears = false
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
const noDogYear = (dogYearFuture - dogYearOfBirth)
if (shouldShowResultInDogYears) {
    text1 = `Your dog will be ${dogYear} dog years old in ${dogYearFuture}`
}
else {
    text1 = `Your dog will be ${noDogYear} human years old in ${dogYearFuture}`
}
console.log(text1)

// Rich/Poor variable
const balance = 9000
if (balance > 10000) {
    console.log("Fat stacks💰")
}
else if (balance < 10000) {
    console.log("Hustle up")
}


//Mood
/*
const mood = 8
if (mood === "happy") {
    console.log("Good job, you're doing great!")
    document.write ("Good job, you're doing great!")
}
else if (mood === "sad") {
    console.log("Every cloud has a silver lining")
    document.write ("Every cloud has a silver lining")
}
else if (typeof mood === 'number') {
    console.log("Beep beep boopydiboo")
    document.write ("Beep beep boopydiboo")
}
else {
    console.log("Sorry, I'm still learning")
    document.write ("Sorry, I'm still learning")
};
*/

//Loop
//i er startpunktet. derefter sæt en begrænsning på hvor mange gange koden skal printes (i < 11 eks.)
// i++ står for at tilføje værdien 1 for hvert loop

/*
for (let i = 5; i > -6; i--) {
    console.log(i);
}
*/
/*
for (let i = 5; i < 31; i=i+3) {
    console.log(i)
}
*/

//Hash tag random printer på html
const random = Math.floor (Math.random() * 10); {
    console.log(random)
}

for (let i = 0; i < random; i++) {
    console.log(i);
}


//ARRAYS

fruits = ["apple", "banana", "orange", "pineapple"];
console.log(fruits);

//Pushing an element - få et element ind
let newFruit = "kiwi";
fruits.push(newFruit);
console.log(fruits.length);

//Referring to an element -
let singleFruit = fruits[1];
console.log(singleFruit);

// Iterate

for (let i = 0; i < 10; i++); {
    console.log(fruits[i]);
}