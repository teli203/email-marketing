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
  
    const questionContainer = document.getElementById("survey-content");
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const restartButton = document.getElementById("restart-btn");
    const resultMessage = document.getElementById("result");
  
    let currentQuestionIndex = 0;
  
    function showQuestion() {
      resetState();
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.innerText = currentQuestion.question;
      currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
      });
    }
  
    function resetState() {
      while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }
  
    function selectAnswer() {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
      } else {
        endSurvey();
      }
    }
  
    function endSurvey() {
      questionContainer.classList.add("hide");
      resultMessage.innerText = "Thanks for your time, check your inbox for our gratitude.";
      resultMessage.classList.remove("hide");
      resultMessage.focus();
      restartButton.classList.remove("hide");
    }
  
    restartButton.addEventListener("click", () => {
      currentQuestionIndex = 0;
      resultMessage.classList.add("hide");
      restartButton.classList.add("hide");
      questionContainer.classList.remove("hide");
      showQuestion();
    });
  
    // Initialize the first question
    showQuestion();
  
    // Back button navigation
    document.getElementById("backHome").addEventListener("click", function () {
      window.location.href = "../index.html";
    });
  });
  