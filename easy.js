window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", this.window.scrollY > 0);
})
$(document).ready(function(){
    $('#quizs').click(function(){
        $('#difficultys').toggleClass('activessss')
    })
})
const questions = [
    {
        question: "What does HTML stands for?",
        answers:[
            { text: "a. Hyperlinks And Text Markup Language", correct: false},
            { text: "b. Hypertext Markup Language", correct: true},
            { text: "c. Home Tool Markup Language", correct: false},
            { text: "d. Hard Text Markup Language", correct: false},
        ] 
    },
    {
        question: "HTML largest heading",
        answers:[
            { text: "a. h1", correct: true},
            { text: "b. h2", correct: false},
            { text: "c. h6", correct: false},
            { text: "d. h3", correct: false},
        ] 
    },
    {
        question: "HTML line break",
        answers:[
            { text: "a. < bre >", correct: false},
            { text: "b. < break >", correct: false},
            { text: "c. < lb >", correct: false},
            { text: "d. < br >", correct: true},
        ] 
    },
    {
        question: "HTML paragraph",
        answers:[
            { text: "a. < paragraph >", correct: false},
            { text: "b. < p >", correct: true},
            { text: "c. < para >", correct: false},
            { text: "d. < graph >", correct: false},
        ] 
    },
    {
        question: "HTML smallest",
        answers:[
            { text: "a. h4", correct: false},
            { text: "b. h6", correct: true},
            { text: "c. h1", correct: false},
            { text: "d. h2", correct: false},
        ] 
    },
    {
        question: "Which property controls the spacing between lines of text?",
        answers:[
            { text: "a. letter-spacing", correct: false},
            { text: "b. line-height", correct: true},
            { text: "c. text-spacing", correct: false},
            { text: "d. word-spacing", correct: false},
        ] 
    },
    {
        question: "What does CSS stands for?",
        answers:[
            { text: "a. Conclusive Style Sheets", correct: false},
            { text: "b. Cascading Style Sheets", correct: true},
            { text: "c. Computer Style Sheets", correct: false},
            { text: "d. Colorful Style Sheets", correct: false},
        ] 
    },
    {
        question: "Which HTML tag is used to link a CSS file?",
        answers:[
            { text: "a. < css >", correct: false},
            { text: "b. < script >", correct: false},
            { text: "c. < link >", correct: true},
            { text: "d. < style >", correct: false},
        ] 
    },
    {
        question: "What is the correct syntax for adding a background color in CSS?",
        answers:[
            { text: "a. color-background: blue;", correct: false},
            { text: "b. bg-color: blue;", correct: false},
            { text: "c. background-color: blue;", correct: true},
            { text: "d. background: blue;", correct: false},
        ] 
    },
    {
        question: "What does the float property do in CSS?",
        answers:[
            { text: "a. It changes the position of an element absolutely.", correct: false},
            { text: "b. It adds a shadow to an element.", correct: false},
            { text: "c. It makes an element transparent.", correct: false},
            { text: "d. It moves an element to the left or right, allowing other content to wrap around it.", correct: true},
        ] 
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion  = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true; 
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();