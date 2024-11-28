let level = "beginner"; 
let correctAnswers = 0; 


function showPrompt() {
    const promptElement = document.getElementById("prompt");

    if (level === "beginner") {
        promptElement.innerText = "Solve for x: x + 3 = 6";
    } else if (level === "intermediate") {
        promptElement.innerText = "Solve for x: x² - 5x + 6 = 0";
    } else if (level === "advanced") {
        promptElement.innerText = "Solve for x: 2x² - 3x - 5 = 0";
    }
}


function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = getCorrectAnswer();
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        correctAnswers++;
        feedbackElement.innerText = "Correct! Great job!";
        updateLevel();
    } else {
        feedbackElement.innerText = getTip(); 
    }
}


function getCorrectAnswer() {
    if (level === "beginner") {
        return "3"; // x + 3 = 6 -> x = 3
    } else if (level === "intermediate") {
        return "3"; // x² - 5x + 6 = 0 -> x = 3
    } else if (level === "advanced") {
        return "5"; // 2x² - 3x - 5 = 0 -> x = 5
    }
}


function getTip() {
    if (level === "beginner") {
        return "Tip: Subtract 3 from both sides of the equation to isolate x.";
    } else if (level === "intermediate") {
        return "Tip: Factorize the quadratic equation (x² - 5x + 6) to find the roots.";
    } else if (level === "advanced") {
        return "Tip: Use the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a.";
    }
}


function updateLevel() {
    const feedbackElement = document.getElementById("feedback");

    if (correctAnswers === 1 && level === "beginner") {
        level = "intermediate";
        feedbackElement.innerText += " You have moved to the intermediate level!";
    } else if (correctAnswers === 2 && level === "intermediate") {
        level = "advanced";
        feedbackElement.innerText += " You have moved to the advanced level!";
    }
    showPrompt();
}


showPrompt();
