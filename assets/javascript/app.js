var quiz = document.getElementById("quizContainer");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var timer = document.getElementById("timer");
var scoreContainer = document.getElementById("resultContainer");

var questions = [
    {
        question: "What does JSON stand for?",
        A: "JavaScript Object Notation",
        B: "Jason",
        C: "Jay's son",
        correct: "A"
    },
    {
        question: "How many colours in a rainbow?",
        A: "1",
        B: "5",
        C: "7",
        correct: "C"
    },
    {
        question: "What is the capital of Canada?",
        A: "Toronto",
        B: "Ottawa",
        C: "Montreal",
        correct: "B"
    },
    {
        question: "The beaver is the national emblem of which country?",
        A: "Canada",
        B: "USA",
        C: "Australia",
        correct: "A"
    },
    {
        question: "Which singer’s real name is Stefani Joanne Angelina Germanotta?",
        A: "Gwen Stefani",
        B: "Madonna",
        C: "Lady Gaga",
        correct: "C"
    },
    {
        question: "How many players are there in a baseball team?",
        A: "Ten",
        B: "Six",
        C: "Nine",
        correct: "C"
    }
];

var lastQuestion = questions.length - 1;
let currentQuestion = 0;
let count = 20;
let score = 0;
var interval;

function setQuestion(){

    let q = questions[currentQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.A;
    choiceB.innerHTML = q.B;
    choiceC.innerHTML = q.C;
}

document.addEventListener("DOMContentLoaded", startQuiz);

function startQuiz(){
    setQuestion();
    interval = setInterval(setTimer, 1000);
}

function setTimer(){
    timer.innerHTML = count;
    count--;
    if (count === 0){
        clearInterval(interval);
        document.getElementById("timerDiv").innerHTML = 'Out of time';
        showScore();
    }
}

function showScore(){
    quiz.style.display = "none";
    scoreContainer.style.display = "block";
    scoreContainer.innerHTML = "You got " + score + " out of " + questions.length + " correct";
    clearInterval(interval);
    
}

function checkAnswer(answer){
    if (answer === questions[currentQuestion].correct){
        score++;
    }

    if(currentQuestion < lastQuestion){
        currentQuestion++;
        setQuestion();
    }else {
        clearInterval(interval);
        document.getElementById("timerDiv").innerHTML = "All done";
        showScore();
    }
}

choiceA.onclick = function() {
    checkAnswer('A')
};

choiceB.onclick = function() {
    checkAnswer('B')
};

choiceC.onclick = function() {
    checkAnswer('C')
};