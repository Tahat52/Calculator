const display = document.querySelector('.block');
const zero = document.querySelector('.c')
const dot = document.querySelector('.z')
const equal = document.querySelector('.y')
const Ac = document.querySelector('.AC')
const nine = document.querySelector('.nine')
const eight = document.querySelector('.eight')
const seven = document.querySelector('.seven')
const six = document.querySelector('.six')
const five = document.querySelector('.five')
const four = document.querySelector('.four')
const three = document.querySelector('.three')
const two = document.querySelector('.two')
const one = document.querySelector('.one')
const plus = document.querySelector('.plus')
const division = document.querySelector('.division')
const multi = document.querySelector('.multi')
const negative = document.querySelector('.negative')
const percentage = document.querySelector('.percentage')
const NEG = document.querySelector('.NEG')

let currentInput = '';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;
function addNumber(num) {
     if (shouldResetDisplay) {
          currentInput = '',
               shouldResetDisplay = false
     }
     currentInput += num;
     display.textContent = currentInput;
}

one.addEventListener('click', () => addNumber('1'));
two.addEventListener('click', () => addNumber('2'));
three.addEventListener('click', () => addNumber('3'));
four.addEventListener('click', () => addNumber('4'));
five.addEventListener('click', () => addNumber('5'));
six.addEventListener('click', () => addNumber('6'));
seven.addEventListener('click', () => addNumber('7'));
eight.addEventListener('click', () => addNumber('8'));
nine.addEventListener('click', () => addNumber('9'));
zero.addEventListener('click', () => addNumber('0'));
dot.addEventListener('click', () => addNumber('.'));
function setOperator(op) {
     if (currentInput === '') return;
     previousInput = currentInput;
     operator = op;
     shouldResetDisplay = true;

}
plus.addEventListener('click', () => setOperator('+'));
negative.addEventListener('click', () => setOperator('-'));
multi.addEventListener('click', () => setOperator('*'));
division.addEventListener('click', () => setOperator('/'));
percentage.addEventListener('click', () => setOperator('%'));
NEG.addEventListener('click', () => setOperator('+/-'));

equal.addEventListener('click', function () {
     if (previousInput === '' || currentInput === '' || operator === null) {
          return;
     }
     const firstNumber = parseFloat(previousInput);
     const secondNumber = parseFloat(currentInput);
     let result;
     if (operator === '+') {
          result = firstNumber + secondNumber;
     }
     else if (operator === '-') {
          result = firstNumber - secondNumber;
     }
     else if (operator === '*') {
          result = firstNumber * secondNumber;
     }
     else if (operator === '/') {
          result = firstNumber / secondNumber;
     }
     else if (operator === '%') {
          result = (firstNumber / 100);
     }

     currentInput = String(result);
     display.textContent = currentInput;
     previousInput = '';
     operator = null;
     shouldResetDisplay = true;
});
Ac.addEventListener('click', function () {
     currentInput = '';
     previousInput = '';
     operator = null;
     shouldResetDisplay = false;
     display.textContent = '';
});


