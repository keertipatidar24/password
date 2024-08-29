// Define the correct code for unlocking
const correctCode = '9893'; // Change this to the code you want

let enteredCode = '';

function appendDigit(digit) {
    if (enteredCode.length < 4) {
        enteredCode += digit;
        updateDisplay();
    }
}

function clearInput() {
    enteredCode = '';
    updateDisplay();
}

function updateDisplay() {
    const inputDisplay = document.getElementById('input-display');
    let displayText = '';
    for (let i = 0; i < 4; i++) {
        displayText += (enteredCode[i] ? '• ' : '• ') + ' ';
    }
    inputDisplay.textContent = displayText.trim();
}

function unlock() {
    const feedback = document.getElementById('feedback');
    
    if (enteredCode === correctCode) {
        feedback.textContent = 'Unlocked!';
        feedback.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'success.html'; // Redirect to a different page or perform another action
        }, 1000); // Redirect after 1 second
    } else {
        feedback.textContent = 'Incorrect code. Try again.';
        feedback.style.color = 'red';
        clearInput(); // Clear the input field after incorrect attempt
    }
}

