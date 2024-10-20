
document.querySelectorAll("button").forEach((button) => button.onclick = buttonClicked);

function buttonClicked(e) {
    let calculation = document.getElementById("calculation").textContent;

    buttonValue = e.target.getAttribute("value");

    if (buttonValue === "=") {
        processCalculation(calculation);
    } else {
        addToCalculation(calculation, e.target);
    }
}

function addToCalculation(calculation, button) {
    const buttonType = button.getAttribute("button-type");
    const buttonValue = button.getAttribute("value");
    if (calculation === "0") {
        if (buttonType === "number") {
            calculation = buttonValue;
        }
    } else {
        if (buttonType === "operator") {
            calculation += " " + buttonValue + " ";
        } else {
            calculation += buttonValue;
        }
    }
    document.getElementById("calculation").textContent = calculation;
}

function processCalculation(calculation) {
    calcElems = calculation.split(" ");
    calculation = performOperation(calcElems[0], calcElems[1], calcElems[2]);
    document.getElementById("calculation").textContent = calculation;
}


function performOperation(firstNumber, operator, secondNumber) {
    if (operator === "+") {
        return firstNumber + secondNumber;
    } else if (operator === "-") {
        return firstNumber - secondNumber;
    } else if (operator === "/") {
        return firstNumber / secondNumber;
    } else if (operator === "*") {
        return firstNumber * secondNumber;
    }
}

