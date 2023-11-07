document.addEventListener("DOMContentLoaded", function() {
    const butn = document.getElementById("butn");
    const value = document.getElementById("value");
    
    butn.addEventListener("click", rollDice);
    
    function rollDice() {
        const min = 1;
        const max = 6;
        
        const randomValue = Math.floor(Math.random() * (max-min+1)) + min;
        
        value.textContent = `You Rolled a ${randomValue}` ;
    }
});
