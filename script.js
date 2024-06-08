const symbols = [ '🍋', '🍊', '🍇', '🍉','☕'];
const winner = '☕'

function spin() {
    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');

    slot1.classList.add('spin-animation');
    slot2.classList.add('spin-animation');
    slot3.classList.add('spin-animation');

    setTimeout(() => {
        const symbol1 = getRandomSymbol();
        const symbol2 = getRandomSymbol();
        const symbol3 = getRandomSymbol();

        slot1.innerText = symbol1;
        slot2.innerText = symbol2;
        slot3.innerText = symbol3;

        slot1.classList.remove('spin-animation');
        slot2.classList.remove('spin-animation');
        slot3.classList.remove('spin-animation');

        if (winner == symbol1 && winner == symbol2 && winner === symbol3) {
            displayWinMessage();
        } else {
            clearWinMessage();
        }
    }, 2000); // Adjust the time for the spinning animation
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function displayWinMessage() {
    const message = document.getElementById('message');
    message.textContent = 'You Win!';
}

function clearWinMessage() {
    const message = document.getElementById('message');
    message.textContent = '';
}
