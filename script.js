const symbols = ['🍒', '🍋', '🍊', '🍇', '🍉'];

function spin() {
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

slot1.innerText = getRandomSymbol();
slot2.innerText = getRandomSymbol();
slot3.innerText = getRandomSymbol();
}

function getRandomSymbol() {
return symbols[Math.floor(Math.random() * symbols.length)];
}
