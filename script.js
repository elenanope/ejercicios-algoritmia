document.getElementById("buttonToMult").form.addEventListener(
    "submit", (event) => {
        event.preventDefault();
        const numberToMult = Number(document.getElementById("numberToMult").value);
        document.getElementById("multTable").innerHTML = multTable(numberToMult);
    }
);
document.getElementById("leapYearButton").form.addEventListener(
    "submit", (event) => {
        event.preventDefault();
        const inputNumber = Number(document.getElementById("checkLeap").value);
        document.getElementById("isLeapYear").innerHTML = isLeapYear(inputNumber) ? `Efectivamente, ${inputNumber} es un año bisiesto` : `${inputNumber} <strong>no</strong> es un año bisiesto`;
    }
);
document.getElementById("orderedArrayPromptButton").addEventListener(
    "click", () => {
        const selected = document.querySelector('input[name="order"]:checked');
        document.getElementById("orderedArray").innerHTML = promptToArray(selected.value === "true");
    }
);
document.getElementById("orderedArrayInputButton").form.addEventListener(
    "submit", (event) => {
        event.preventDefault();
        const selected = document.querySelector('input[name="order"]:checked');
        const numberArray = Array.from(document.querySelectorAll('.number'), input => input.value);
        document.getElementById("orderedArray").innerHTML = inputToArray(numberArray.filter(v => v !== ""), selected.value === "true");
    }
);
document.getElementById("checkCharButton").form.addEventListener(
    "submit", (event) => {
        event.preventDefault();
        const selected = document.getElementById('caseSensitive').checked;
        const characterToSearch = document.getElementById('characterToSearch').value;
        const wordsToSearch = Array.from(document.querySelectorAll('.word'), input => input.value);
        document.getElementById("countedCharacters").innerHTML = countCharacters(wordsToSearch.filter(v => v !== ""), characterToSearch, selected);
    }
);
document.getElementById("add-word").addEventListener(
    "click", () => {
        addInput('text', 'word', 'word-container', 'añade una palabra aquí');
    }
);
document.getElementById("add-number").addEventListener(
    "click", () => {
        addInput('number', 'number', 'number-container', 'añade un número aquí');
    }
);

function addInput(inputType, inputClass, collectionId, placeholderText) {
    let elem = document.createElement("input");
    elem.className = inputClass;
    elem.type = inputType;
    elem.placeholder = placeholderText;
    document.getElementById(collectionId).lastElementChild.after(elem);
}
//1
function multTable(numberToTable) {
    let wholeTable = '';
    for (let i = 1; i <= 10; i++) {
        wholeTable += `<p>${numberToTable} x ${i} = ${numberToTable * i}</p>`;
    }
    return wholeTable;
}

//2
function promptToArray(smallToBig = true) {
    let numberArray = [];
    let lastInput;
    while (lastInput !== 0 && !Number.isNaN(lastInput)) {
        lastInput = parseInt(prompt("Introduce un número. Si no quieres añadir más, escribe 0"));
        if (lastInput !== 0 && isFinite(lastInput)) numberArray.push(lastInput);
    }
    if (smallToBig) return numberArray.sort((a, b) => a - b);
    else return numberArray.sort((a, b) => b - a);
}
function inputToArray(stringArray, smallToBig = true) {
    let numberArray = [...stringArray];
    if (smallToBig) return numberArray.sort((a, b) => a - b);
    else return numberArray.sort((a, b) => b - a);
}

//3
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

//4
function countCharacters(stringArray, characterToCount, isCaseSensitive) {
    let countedCharacters = 0;
    characterToCount = characterToCount[0];
    for (const arrayElement of stringArray) {
        for (const singleCharacter of arrayElement) {
            if (isCaseSensitive) {
                if (singleCharacter === characterToCount) {
                    countedCharacters++;
                }
            }
            else {
                if (singleCharacter.toLowerCase() === characterToCount.toLowerCase()) {
                    countedCharacters++;
                }
            }
        }
    }
    return `Hay un total de ${countedCharacters} caracteres "${characterToCount}" en la siguiente lista: ${stringArray}`;
}