const slots = document.querySelectorAll('.slot');
const spinButton = document.getElementById('spin');
const resultText = document.getElementById('result');

let currentValues = ['🍩','☕', '🧁'];
let previousValues = null;

function spin() {
  previousValues = currentValues.slice();
  currentValues = currentValues.map(() => {
    const randomIndex = Math.floor(Math.random() * 4);
    return currentValues[randomIndex];
  });

  updateSlots();
  checkResult();
}

function updateSlots() {
  slots.forEach((slot, index) => {
    slot.textContent = currentValues[index];
  });
}

function checkResult() {
  if (currentValues.every((value, index) => value === previousValues[index])) {
    resultText.textContent = 'You won!';
  } else {
    resultText.textContent = 'Try again!';
  }
}

spinButton.addEventListener('click', spin);
