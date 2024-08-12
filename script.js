let currentInput = "";
let lastCharIsOperator = false;

function inputCharacter(char) {
    if (!isNaN(char) || char === '.') {
        if (currentInput === "0" && char === "0") return; // Prevent multiple leading zeros
        currentInput += char;
        lastCharIsOperator = false;
    } else if (["+", "-", "*", "/"].includes(char)) {
        if (!lastCharIsOperator) {
            currentInput += char;
            lastCharIsOperator = true;
        } else {
            currentInput = currentInput.slice(0, -1) + char;
        }
    } else if (char === "=") {
        currentInput = eval(currentInput).toString();
        lastCharIsOperator = false;
    }

    updateDisplay(currentInput);
}

function updateDisplay(value) {
    document.getElementById('display').innerText = value || "0";
}

function clearDisplay() {
    currentInput = "";
    lastCharIsOperator = false;
    updateDisplay("0");
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    lastCharIsOperator = false;
    updateDisplay(currentInput);
}

