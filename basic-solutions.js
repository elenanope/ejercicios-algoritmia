//1
function multTable(numberToTable) {
    const table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(numberToTable * i);
    }
    return table;
}
console.log(multTable(3));

//2
const orderedInputArray = (function promptToArray() {
    let numberArray = [];
    let lastInput;
    while (lastInput !== 0 && !Number.isNaN(lastInput)) {
        lastInput = parseInt(prompt("Please enter a number. If you are finished enter 0"));
        if (lastInput !== 0 && isFinite(lastInput)) numberArray.push(lastInput);
    }
    return numberArray.sort((a, b) => a - b);
}());
console.log(orderedInputArray);

//3
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

//4
let data = ["yoda", "best", "has", "tortilla", "cAfe", "barrita tomate", "zumo"];
function countCharacters(stringArray, characterToCount) {
    let countedCharacters = 0;
    for (const arrayElement of stringArray) {
        for (const singleCharacter of arrayElement) {
            if (singleCharacter === characterToCount) {
                countedCharacters++;
            }
        }
    }
    return countedCharacters;
}
countCharacters(data, "a");