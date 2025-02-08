function getNumbers() {
    return {
        num1: parseFloat(document.getElementById("num1").value),
        num2: parseFloat(document.getElementById("num2").value)
    };
}

function addFunction() {
    let { num1, num2 } = getNumbers();
    document.getElementById("result").innerText = "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2) + ".";
}

function subFunction() {
    let { num1, num2 } = getNumbers();
    document.getElementById("result").innerText = "The difference of " + num1 + " and " + num2 + " is " + (num1 - num2) + ".";
}

function multFunction() {
    let { num1, num2 } = getNumbers();
    document.getElementById("result").innerText = "The product of " + num1 + " and " + num2 + " is " + (num1 * num2) + ".";
}

function divFunction() {
    let { num1, num2 } = getNumbers();
    document.getElementById("result").innerText = "The quotient of " + num1 + " and " + num2 + " is " + (num1 / num2) + ".";
}

function modFunction() {
    let { num1, num2 } = getNumbers();
    document.getElementById("result").innerText = "There is a remainder of " + (num1 % num2) + " when " + num1 + " is divided by " + num2 + ".";
}