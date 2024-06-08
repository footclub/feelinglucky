const symbols = ['', '🍋', '🍊', '🍇', '🍉','☕'];
const winningCombination = ['☕', '☕', '☕']; // Define a winning combination

function spin() {
    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');

    const symbol1 = getRandomSymbol();
    const symbol2 = getRandomSymbol();
    const symbol3 = getRandomSymbol();

    slot1.innerText = symbol1;
    slot2.innerText = symbol2;
    slot3.innerText = symbol3;

    if (symbol1 === symbol2 && symbol2 === symbol3) {
        displayWinMessage();
    } else {
        clearWinMessage();
    }
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function displayWinMessage() {
    const message = document.getElementById('message');
    message.innerText = 'You Win!';
}

function clearWinMessage() {
    const message = document.getElementById('message');
    message.innerText = '';
}
