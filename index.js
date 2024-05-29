const tituloPricipal = document.querySelector('.calc__numbers');
const screen = document.querySelector('.calc__result');

document.addEventListener('DOMContentLoaded', () => {
    const switchInputs = document.querySelectorAll('input[name="colorSwitch"]');

    switchInputs.forEach(input => {
        input.addEventListener('change', (event) => {
            const value = event.target.value;
            document.body.className = `theme-${value}`;
        });
    });
});

let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
    if (currentOperand.includes('.') && number === 0) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function appendOperator(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function appendDecimal() {
    if (currentOperand.includes('.')) return;
    currentOperand += '.';
    updateDisplay();
}

function deleteLast() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

function resetDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentOperand = result;
    operation = null;
    previousOperand = '';
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentOperand || '0';
}