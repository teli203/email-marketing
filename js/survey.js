//Questions and answer options
document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "How often do you shop online?",
            answers: ["Daily", "Weekly", "Monthly", "Rarely"]
        },
        {
            question: "What type of products do you buy the most?",
            answers: ["Clothing", "Electronics", "Home Goods", "Other"]
        },
        {
            question: "Which payment method do you prefer?",
            answers: ["After Pay", "PayPal", "Klarna", "Apple Pay", "Cash App"]
        },
        {
            question: "What influences your purchase decisions the most?",
            answers: ["Price", "Reviews", "Brand", "Samples"]
        },
        {
            question: "How satisfied are you with our online store?",
            answers: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"]
        },
        {
            question: "Would you recommend our store to others?",
            answers: ["Yes", "No", "Maybe"]
        }
    ];

    const questionContainer = document.getElementById("question-container");
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const restartButton = document.getElementById("restart-btn");
    const resultMessage = document.getElementById("result");
    
    let currentQuestionIndex = 0;

    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerText = answer;
            button.classList.add("btn");
            button.style.flex = "1";
            button.style.padding = "10px";
            button.style.textAlign = "center";
            button.style.whiteSpace = "nowrap";
            button.style.minWidth = "100px";
            button.addEventListener("click", selectAnswer);
            answerButtons.appendChild(button);
        });
    }
// Reset 
    function resetState() {
        nextButton.classList.add("hide");
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer() {
        nextButton.classList.remove("hide");
    }
// End Survey & Restart for purpose of simple app typically no restart just submit
    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            endSurvey();
        }
    });

    function endSurvey() {
        questionContainer.classList.add("hide");
        nextButton.classList.add("hide");
        resultMessage.innerText = "Thank you for your time! We emailed you a gift!";
        resultMessage.classList.remove("hide");
        restartButton.classList.remove("hide");
    }

    restartButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        resultMessage.classList.add("hide");
        restartButton.classList.add("hide");
        questionContainer.classList.remove("hide");
        showQuestion();
    });

    showQuestion();
//Button Style
    answerButtons.style.display = "flex";
    answerButtons.style.flexWrap = "wrap";
    answerButtons.style.justifyContent = "space-between";
    answerButtons.style.gap = "1rem";
    answerButtons.style.margin = "3rem";
});
