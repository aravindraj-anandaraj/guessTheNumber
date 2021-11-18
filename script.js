let input = document.getElementById('input');
let count = 0;
let number = Math.round(Math.random() * 10);

function checkGuess() {
    count++;
    if(parseInt(input.value) == number) {
        alert(`Congratulations, you guessed correctly in ${count} attempts.`);
    } else if(input.value <= number) {
        alert('Sorry, guess a larger number');
    } else if(input.value >= number) {
        alert('Sorry, guess a smaller number');
    }
}