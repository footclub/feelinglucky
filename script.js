const symbols = [ '🍋', '🍊', '🍇', '🍉','☕'];
const winner = '☕'

function spin() {
    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');

    slot1.classList.add('spin-animation');
    slot2.classList.add('spin-animation');
    slot3.classList.add('spin-animation');
    
    const symbol1 = getRandomSymbol();
    const symbol2 = getRandomSymbol();
    const symbol3 = getRandomSymbol();
    
    setTimeout(() => {        
        slot1.innerText = symbol1;
        slot1.classList.remove('spin-animation');        
     }, 1000); // Adjust the time for the spinning animation
    
    setTimeout(() => {
        slot2.innerText = symbol2;
        slot2.classList.remove('spin-animation');        
     }, 1000); // Adjust the time for the spinning animation
    
    setTimeout(() => {
        slot3.innerText = symbol1;
        slot3.classList.remove('spin-animation');        
     }, 1000); // Adjust the time for the spinning animation    


    if (winner == symbol1 && winner == symbol2 && winner === symbol3) {
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
    message.textContent = 'You Win!';
}

function clearWinMessage() {
    const message = document.getElementById('message');
    message.textContent = '';
}
