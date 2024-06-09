const symbols = ['🍋', '🍊', '🍇', '🍉', '☕'];
const winningCombination = ['☕', '☕', '☕'];
const validToken = 'secret'; // Define the valid token
let spinsRemaining = 0;

function validateToken() {
    const tokenInput = document.getElementById('token');
    const token = tokenInput.value.trim();

    if (token === validToken) {
        spinsRemaining = 10; // Set the number of spins for the token
        spin();
    } else {
        const message = document.getElementById('message');
        message.textContent = 'Invalid Token. Please try again.';
    }
}

function spin() {
    if (spinsRemaining > 0) {
        spinsRemaining--;

        const slot1 = document.getElementById('slot1');
        const slot2 = document.getElementById('slot2');
        const slot3 = document.getElementById('slot3');

        slot1.classList.add('spin-animation');
        setTimeout(() => {
            slot1.classList.remove('spin-animation');
            const symbol1 = getRandomSymbol();
            slot1.innerText = symbol1;

            slot2.classList.add('spin-animation');
            setTimeout(() => {
                slot2.classList.remove('spin-animation');
                const symbol2 = getRandomSymbol();
                slot2.innerText = symbol2;

                slot3.classList.add('spin-animation');
                setTimeout(() => {
                    slot3.classList.remove('spin-animation');
                    const symbol3 = getRandomSymbol();
                    slot3.innerText = symbol3;

                    if (symbol1 === '☕' && symbol2 === '☕' && symbol3 === '☕') {
                        displayWinMessage();
                    } else {
                        clearWinMessage();
                    }
                }, 2000); // Adjust the time for the last slot spinning
            }, 2000); // Adjust the time for the second slot spinning
        }, 2000); // Adjust the time for the first slot spinning
    } else {
        const message = document.getElementById('message');
        message.textContent = 'Out of spins. Enter token to play again.';
    }
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
