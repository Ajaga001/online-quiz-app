// script.js

// Array of questions and answers
// script.js

// Array of questions and answers
const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false }
      ]
    },
    {
      question: "What is the largest mammal in the world?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Giraffe", correct: false },
        { text: "Great White Shark", correct: false }
      ]
    },
    {
      question: "In which year did the Titanic sink?",
      answers: [
        { text: "1912", correct: true },
        { text: "1905", correct: false },
        { text: "1898", correct: false },
        { text: "1920", correct: false }
      ]
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      answers: [
        { text: "Osmium", correct: false },
        { text: "Oxygen", correct: true },
        { text: "Gold", correct: false },
        { text: "Oganesson", correct: false }
      ]
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: [
        { text: "Charles Dickens", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "William Shakespeare", correct: true },
        { text: "Mark Twain", correct: false }
      ]
    },
    {
      question: "What is the powerhouse of the cell?",
      answers: [
        { text: "Nucleus", correct: false },
        { text: "Mitochondria", correct: true },
        { text: "Ribosome", correct: false },
        { text: "Golgi apparatus", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-btn');
  const scoreContainer = document.getElementById('score-container');
  const scoreElement = document.getElementById('score');
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add('hide');
    nextButton.classList.remove('hide');
    showQuestion(questions[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    questionElement.textContent = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.textContent = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(answer));
      answerButtonsElement.appendChild(button);
    });
  }
  
  function selectAnswer(answer) {
    if (answer.correct) {
      score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
      button.classList.add(button.textContent === answer.text && answer.correct ? 'correct' : 'incorrect');
      button.disabled = true;
    });
    if (currentQuestionIndex < questions.length - 1) {
      nextButton.classList.remove('hide');
    } else {
      showScore();
    }
  }
  
  function showScore() {
    scoreContainer.classList.remove('hide');
    scoreElement.textContent = `${score} / ${questions.length}`;
    nextButton.classList.add('hide');
  }
  
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      nextButton.classList.add('hide');
      showQuestion(questions[currentQuestionIndex]);
    } else {
      showScore();
    }
  });
  
  // Initialize quiz
  startQuiz();
  