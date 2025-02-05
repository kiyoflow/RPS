// Get all the player choice buttons
const buttons = document.querySelectorAll('.player-choice');
const choiceDiv = document.getElementById('choice');
const choice_2Div = document.getElementById('choice_2');



// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the emoji from the button that was clicked
        const emoji = button.textContent;
        // Update the choice div with the clicked emoji
        choiceDiv.textContent = emoji;
    });
});

const startBtn = document.getElementById('startBtn');
const countdownDiv = document.getElementById('countdown');
// Set initial countdown value to 3 and hide the countdown initially


countdownDiv.style.display = 'none';
let countdown = 3;

// Event listener for the Start Match button
startBtn.addEventListener('click', () => {
    // Hide the start button
    startBtn.style.display = 'none';

    // Show the countdown
    countdownDiv.style.display = 'block';

    // Display the starting countdown value
    countdownDiv.textContent = countdown;

    // Start the countdown using setInterval
    const interval = setInterval(() => {
        countdown--;  // Decrease countdown by 1
        countdownDiv.textContent = countdown;  // Update the displayed countdown

        // When countdown reaches 0, stop the countdown and hide it
        if (countdown === 0) {
            clearInterval(interval);  // Stop the interval
            countdownDiv.style.display = 'none';  // Hide the countdown after it finishes
            
            // Randomly select one emoji for choice_2Div
            const emojis = ['🪨', '📜', '✂']; // Array with 3 emojis
            const randomIndex = Math.floor(Math.random() * emojis.length); // Get a random index from 0 to 2
            const randomEmoji = emojis[randomIndex]; // Select the emoji from the array

            const choice_2Div = document.getElementById('choice_2');
            choice_2Div.textContent = randomEmoji;

            // Check if the player didn't select anything
            if (choiceDiv.textContent === '') {
                 document.getElementById("output_3").innerHTML = "You Lose, You Didn't Make A Choice, Refresh the tab bozo";
                return;  // Stop the rest of the logic
            }

            // Determine the outcome
            if (choiceDiv.textContent === randomEmoji) {
                document.getElementById("output_2").innerHTML = "It's a tie!";
            } else if (
                (choiceDiv.textContent === '🪨' && randomEmoji === '✂') ||  // Rock beats Scissors
                (choiceDiv.textContent === '✂' && randomEmoji === '📜') ||  // Scissors beats Paper
                (choiceDiv.textContent === '📜' && randomEmoji === '🪨')    // Paper beats Rock
            ) {
                document.getElementById("output_1").innerHTML = "You Win!";
            } else {
                document.getElementById("output").innerHTML = "You Lose!";
            }

            // Show the Play Again button after the game ends
            document.getElementById('play_again').style.display = 'block';
        }
    }, 1000);  // The interval runs every second (1000ms)
});

// Get references at the start
const playAgainBtn = document.getElementById('play_again');
playAgainBtn.style.display = 'none';

// Add an event listener to the Play Again button
playAgainBtn.addEventListener('click', () => {
    // Reset the game variables
    countdown = 3;
    choiceDiv.textContent = '';
    choice_2Div.textContent = '';
    document.getElementById("output").innerHTML = '';
    document.getElementById("output_1").innerHTML = '';
    document.getElementById("output_2").innerHTML = '';
    document.getElementById("output_3").innerHTML = '';

    // Reset button visibility
    startBtn.style.display = 'block';
    playAgainBtn.style.display = 'none';
});

