
// find the longest word in a string
function getLongestWord() {
    const sentence = prompt('Enter a sentence of multiple words');
    let splitSentence = sentence.split(" ");
    let longestWord = splitSentence[0];

    for (let i = 0; i <= (splitSentence.length - 1); i++) {
        if (splitSentence[i].length > longestWord.length) {
            longestWord = splitSentence[i];
        }
    }

    console.log(`The longest word of the sentence \n\n ${sentence} \nis\n ${longestWord}`);
}

// reverse a string
function reverseString() {
    const yourString = prompt('Enter your string, even of multiple words');
    let newString = [];
    let i = 0;
    let myLength = yourString.length - 1;

    while (i <= (yourString.length - 1)) {
        newString[i] = yourString[myLength];
        i++;
        myLength--;
    }

    newString = newString.join('')
    alert(newString);
}

// reverse a sentence by words
function reverseSentence() {
    const yourSentence = prompt('Type in your sentence to reverse it by words.');
    let axeSentence = yourSentence.split(" ");
    let newSentence = [];
    let i = 0;
    let myLength = yourSentence.length - 1;

    while (i <= (yourSentence.length - 1)) {
        newSentence[i] = axeSentence[myLength];
        i++;
        myLength--;
    }

    newSentence = newSentence.join(' ')
    alert(newSentence);
}

// Write a function that compares two numbers
function getBiggerNumber() {
    const firstNumber = parseInt(prompt('Enter the first number you want to compare'));
    const secondNumber = parseInt(prompt('Enter the second number you want to compare'));
    
    if (firstNumber < secondNumber) { 
        alert(`Between ${firstNumber} and ${secondNumber} --- ${secondNumber} is bigger.\nThe second number is bigger by ${secondNumber - firstNumber}`);
    } else if (firstNumber > secondNumber) {
        alert(`Between ${firstNumber} and ${secondNumber} --- ${firstNumber} is bigger.\nThe first number is bigger by ${firstNumber - secondNumber}`);
    } else if (firstNumber === secondNumber) {
        alert(`Between ${firstNumber} and ${secondNumber} --- none is bigger.\nThey are the same.`);
    }
}

// Write a function that calculates factorial of the number
function getFactorial() {
    const numberToFactorial = parseInt(prompt('Enter number to get factorial'));
    let finalNumber = numberToFactorial;
    let i = 1;
    
    while (i < numberToFactorial) {
        finalNumber = finalNumber * i;
        i++;
    }

    alert(`Your number ${numberToFactorial} in factorial is: ${finalNumber}`);
}

// Write a function that takes three digits and combines them into one number
function combineDigits() {
    const firstDigit = parseInt(prompt('Enter first digit of the three-digit number'));
    const secondDigit = parseInt(prompt('Enter second digit of the three-digit number'));
    const thirdDigit = parseInt(prompt('Enter third digit of the three-digit number'));
    let digitArray = [];

    digitArray[0] = firstDigit;
    digitArray[1] = secondDigit;
    digitArray[2] = thirdDigit;

    alert(`You entered the digits ${firstDigit}, ${secondDigit}, ${thirdDigit} and it results in ${digitArray.join('')}`);
}


// Function to calculate area out of two parameters
function calculateArea(wid, len) {
    if (arguments.length === 0) {
        // alert('Your parameters cannot be calculated.');
        return;
    } 

    if (arguments.length === 1 && typeof wid === 'number') {
        return wid * wid;
    }

    if (arguments.length === 2 && typeof wid === 'number' && typeof len === 'number') {
        return wid * len;
    }

    // alert('Your parameters cannot be calculated.');
    return;
}
// console.log(calculateArea(7, 8)); --- output 56
// console.log(calculateArea(7));    --- output 49


// Function that gets all the divisors of a number and stores them into an array.
function getDivisors() {
    let numToGetDivisors = parseInt(prompt('Enter number to get an array of divisors'));
    let divisorsArray = [];
    let arrayIndex = 0;
    let divisor = 1;
    
    while (divisor <= (numToGetDivisors / 2)) {
        if (numToGetDivisors % divisor === 0) {
            divisorsArray[arrayIndex] = divisor;
            arrayIndex++;
            divisor++;
        } else if (numToGetDivisors % divisor !== 0) {
            divisor++;
        }
    }
    
    alert('The resulting divisors are: \n' + divisorsArray);
}


// 05 Function that checks if a number is a perfect number -- if the number is also a sum of all of its divisors (excluding itself) -- those are 6, 28, 496, 8128, 33 550 336

function getPerfectNumber() {

    let isPerfectNumber = parseInt(prompt('Enter number to find out if its perfect.'));
    
    function getPerfectDivisors(theNumber) {
        let divisorsArrayPerf = [];
        let arrayIndexPerf = 0;
        let divisorPerf = 1;

        while (divisorPerf <= (theNumber / 2)) {
            if (theNumber % divisorPerf === 0) {
                divisorsArrayPerf[arrayIndexPerf] = divisorPerf;
                arrayIndexPerf++;
                divisorPerf++;
            } else {
                divisorPerf++;
            } 
        }

        return divisorsArrayPerf;
    }
    
    let divArray = getPerfectDivisors(isPerfectNumber);
    
    function getSumOfDivisors(theArray) {
        let i = 0;
        let sum = 0;

        while (i <= theArray.length - 1) {
            sum = sum + theArray[i];
            i++;
        }

        return sum;
    }

    let sumOfDivisors = getSumOfDivisors(divArray);

    if (sumOfDivisors === isPerfectNumber) {
        alert(`Your number ${isPerfectNumber} is PERFECT! \nIts divisors are: ${divArray}\nAnd their sum is ${sumOfDivisors} too.`);
    } else if (sumOfDivisors !== isPerfectNumber) {
        alert(`Your number ${isPerfectNumber} is NOT perfect! \nIts divisors are: ${divArray}\nAnd their sum is ${sumOfDivisors}, so the numbers dont match.`);
    }
}


// Write Roman Numerals convertor (max 3999)

function getRomanNumber() {
    let numberToRoman = prompt('Enter the number to be converted to Roman.\nMaximum 3999');
    let numToArr = numberToRoman.split('');
    let romArr = [];
    let activeNumber;

    if (numberToRoman >= 3000) {
        romArr[0] = 'MMM'
    } else if (numberToRoman >= 2000) {
        romArr[0] = 'MM'
    } else if (numberToRoman >= 1000) {
        romArr[0] = 'M'
    }

    if (numberToRoman % 1000 >= 900) {
        romArr[1] = 'CM';
    } else if ((numberToRoman % 1000 < 900) && (numberToRoman % 1000 >= 800)) {
        romArr[1] = 'DCCC';
    } else if ((numberToRoman % 1000 < 800) && (numberToRoman % 1000 >= 700)) {
        romArr[1] = 'DCC';
    } else if ((numberToRoman % 1000 < 700) && (numberToRoman % 1000 >= 600)) {
        romArr[1] = 'DC';
    } else if ((numberToRoman % 1000 < 600) && (numberToRoman % 1000 >= 500)) {
        romArr[1] = 'D';
    } else if ((numberToRoman % 1000 < 500) && (numberToRoman % 1000 >= 400)) {
        romArr[1] = 'CD';
    } else if ((numberToRoman % 1000 < 400) && (numberToRoman % 1000 >= 300)) {
        romArr[1] = 'CCC';
    } else if ((numberToRoman % 1000 < 300) && (numberToRoman % 1000 >= 200)) {
        romArr[1] = 'CC';
    } else if ((numberToRoman % 1000 < 200) && (numberToRoman % 1000 >= 100)) {
        romArr[1] = 'C';
    }

    if (numberToRoman % 100 >= 90) {
        romArr[2] = 'XC';
    } else if ((numberToRoman % 100 >= 80) && (numberToRoman % 100 < 90)) {
        romArr[2] = 'LXXX';
    } else if ((numberToRoman % 100 >= 70) && (numberToRoman % 100 < 80)) {
        romArr[2] = 'LXX';
    } else if ((numberToRoman % 100 >= 60) && (numberToRoman % 100 < 70)) {
        romArr[2] = 'LX';
    } else if ((numberToRoman % 100 >= 50) && (numberToRoman % 100 < 60)) {
        romArr[2] = 'L';
    } else if ((numberToRoman % 100 >= 40) && (numberToRoman % 100 < 50)) {
        romArr[2] = 'XL';
    } else if ((numberToRoman % 100 >= 30) && (numberToRoman % 100 < 40)) {
        romArr[2] = 'XXX';
    } else if ((numberToRoman % 100 >= 20) && (numberToRoman % 100 < 30)) {
        romArr[2] = 'XX';
    } else if ((numberToRoman % 100 >= 10) && (numberToRoman % 100 < 20)) {
        romArr[2] = 'X';
    }

    if (numberToRoman % 10 >= 9) {
        romArr[3] = 'IX';
    } else if ((numberToRoman % 10 >= 8) && (numberToRoman % 10 < 9)) {
        romArr[3] = 'VIII';
    } else if ((numberToRoman % 10 >= 7) && (numberToRoman % 10 < 8)) {
        romArr[3] = 'VII';
    } else if ((numberToRoman % 10 >= 6) && (numberToRoman % 10 < 7)) {
        romArr[3] = 'VI';
    } else if ((numberToRoman % 10 >= 5) && (numberToRoman % 10 < 6)) {
        romArr[3] = 'V';
    } else if ((numberToRoman % 10 >= 4) && (numberToRoman % 10 < 5)) {
        romArr[3] = 'IV';
    } else if ((numberToRoman % 10 >= 3) && (numberToRoman % 10 < 4)) {
        romArr[3] = 'III';
    } else if ((numberToRoman % 10 >= 2) && (numberToRoman % 10 < 3)) {
        romArr[3] = 'II';
    } else if ((numberToRoman % 10 >= 1) && (numberToRoman % 10 < 2)) {
        romArr[3] = 'I';
    }

    alert(`The number ${numberToRoman} is ${romArr.join('')} in Roman Numerals.`);
}


// Write a function that takes hours, minutes and seconds and displays the time in particular units.
function getTimeUnit() {
    const hours = parseInt(prompt('Write hours'));
    const minutes = parseInt(prompt('Write minutes'));
    const seconds = parseInt(prompt('Write seconds'));
    const unit = prompt('Enter a unit. Either hours (h or hr), minutes (m or min), or secons (s or sec)')
    let totalHours = (hours + (minutes / 60) + (seconds / 3600)).toFixed(2);
    let totalMinutes = ((hours * 60) + minutes + (seconds / 60)).toFixed(2);
    let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;;

    if ((unit.toUpperCase() == "H") || (unit.toUpperCase() == "HR")) {
        alert(`You wanted the time in hours, and it makes ${totalHours} hours.`);
    } else if ((unit.toUpperCase() == "M") || (unit.toUpperCase() == "MIN")) {
        alert(`You wanted the time in minutes, and it makes ${totalMinutes} minutes.`);
    } else if ((unit.toUpperCase() == "S") || (unit.toUpperCase() == "SEC")) {
        alert(`You wanted the time in seconds, and it makes ${totalSeconds} seconds.`);
    }
}

// Write a function that takes h, min and sec and displays the time in hh:mm:ss format
// Decided to make it an arrow function and with arguments, tested by console.log
const getTimeInFormat = (hr, min, sec) => {
    const timeArray = 0;
    
    
    
    if (hr > 24) {
        return "You entered nonsense time (hr)";
    } else if (min > 59) {
        return "You entered nonsense time (min)";
    } else if (sec > 59) {
        return "You entered nonsense time (sec)";
    } else {
        timeArray[0] = hr.toString().padStart(2, '0');
        timeArray[1] = min.toString().padStart(2, '0');
        timeArray[2] = sec.toString().padStart(2, '0');

        return timeArray.join(':');
    }
}

const testTimeInFormat = () => {
    console.log(getTimeInFormat(2, 15, 17) + ' is the time put in by the parameters');
    console.log(getTimeInFormat(0, 7, 41) + ' is the time put in by the parameters');
//  console.log(getTimeInFormat(2, 15, 105) + ' is the time put in by the parameters');
//  console.log(getTimeInFormat(6, 59, 59) + ' is the time put in by the parameters');
}

// Write a function that takes number of seconds converts them into hours, minutes and seconds, and returns the result in the format 'hh:mm:ss'

const secondsToTimeInFormat = (valueInSec) => {
    const myTimeArray = [];
    let secToHours = ((valueInSec / 3600) - (valueInSec % 3600) / 3600).toString().padStart(2, '0');
    let secToMins = ((valueInSec - (secToHours * 3600)) / 60).toFixed(0).toString().padStart(2, '0');

    myTimeArray[0] = secToHours
    myTimeArray[1] = secToMins;
    myTimeArray[2] = 57;
    return myTimeArray.join(':');
}

const testSecToTime = () => {
    console.log(secondsToTimeInFormat(10900));  
    console.log(secondsToTimeInFormat(21600));
    console.log(secondsToTimeInFormat(18000));
}


