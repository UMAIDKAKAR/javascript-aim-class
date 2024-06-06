let car = 'Mustang';
console.log("Hello there");

let total = 0;
total = total + 2;
total +=3;
total++;

console.log(total);

// I want to say it's chilly if it's less than 40 defrees out

let temperature = 32;
if (temperature < 40) {
    console.log('brrrr..... it is chilly');
    //    console.log('brrrr..... it is chilly');
}

temperature = 42;
if (temperature < 40) {
    console.log('brrrr again..... it is chilly');
}

temperature = 40;
if (temperature <= 40) {
    console.log('brrrr..... it is  chilly');
}

function checkTemperature(tempToday) {
    if (tempToday <= 40) {
        console.log('brrrr..... it is  kinda chilly');
    }
}

checkTemperature(40);
checkTemperature(32);
checkTemperature(55);

function checkCreditHealth(cardBalance, numOfLoans) {
    if (cardBalance > 5000 && numOfLoans > 7) {
        console.log("I am in trouble");
    }
}

//checkCreditHealth(6000, 8);
checkCreditHealth(5000, 8);
checkCreditHealth(6000, 7);

function checkCreditHealth2(cardBalance, numOfLoans) {
    if (cardBalance > 5000 && numOfLoans > 7) {
        console.log ("I am in some trouble");
    } else {
        console.log ("I am doing okay credit-wise");
    }
}

// checkCreditHealth2(6000, 8);
// checkCreditHealth2(5000, 8);
// checkCreditHealth2(6000, 6);

function pickHairColor(mood) {
    if (mood == "happy") {
        console.log("I want green hair today!")
    } else if (mood = "sad") {
        console.log("I want blue hair today");
    }
}

pickHairColor("happy");
pickHairColor("sad");
pickHairColor("angry")

function checkGrade(score) {
    if (score >= 90) {
        console.log("I got an A!")
    } else if (score >= 80) {
        console.log("I Got Grade B")
        
    } else if (score >= 70) {
        console.log("I Got Grade C")
        
    } else if (score >= 60) {
        console.log("I Got Grade B")
    } else {
        console.log("I FAILED!!!!");
    }
}

// checkGrade(72);
// checkGrade(94);
// checkGrade(59);
// checkGrade(60);
// checkGrade(81);

function getTodaysClass(daysOfWeek) {
    switch (daysOfWeek) {
        case "Monday":
            console.log('Today is science class');
            break;
        case "Tuesday":
            console.log('Today is Algebra');
            break;
        case "Wednsday":
            console.log('Today is Science lab');
            break;
        case "Thursday":
            console.log('Today is History');
            break;
        case "Friday":
            console.log('Today is a study day');
            break;
        case "Saturday":
        case "Sunday":
            console.log("Hooray, its the weekend!!!");
        default:
            console.log("you didn't give me a day of the week")
    }
}

// getTodaysClass("Monday");
// getTodaysClass("Thursday");
// getTodaysClass("Sunday");

let fruits = ['apple', 'banana', 'orange', 'kiwi', 'watermelon'];
function printFruits(fruits) {
    for (let i = 0; i < fruits.length; i++) {
        console.log(`Fruit ${i + 1} is a ${fruits[i]}`);
    }
}

// printFruits(fruits);

function printFruits(fruits) {
    for (let i = fruits.length - 1; i >= 0; i--) {
        console.log(`Fruit ${i + 1} is a ${fruits[i]}`);
    }
}

// printFruits(fruits);

let cars = ['Audi', "Chrysler", "Ford", "Honda", "Subaru", "Toyota"];
// printFruits(cars);
// printFruits("hello");
// printFruits(22);

function isDivisibleByFive() {
    } for (let i = 1; i <= 30; i += 3) {
        if (i % 5 == 0) {
            console.log(`${i} is devisible by 5`);
    } else {
        console.log(`${i} is not divisible by 5`);
    }
}

isDivisibleByFive();