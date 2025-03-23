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
        question: "Which HTTP attribute should be used in an HTML form to send data securely?",
        answers:[
            { text: "method=SECURE", correct: false},
            { text: "method=POST", correct: true},
            { text: "action=https", correct: false},
            { text: "data-transfer=encrypted", correct: false},
        ] 
    },
    {
        question: "What is the purpose of the sandbox attribute in an < iframe > element?",
        answers:[
            { text: "It restricts the capabilities of the embedded content for security reasons.", correct: true},
            { text: "It ensures the iframe content loads faster.", correct: false},
            { text: "It automatically adjusts the iframe’s width and height.", correct: false},
            { text: "It allows the iframe to inherit styles from the parent document.", correct: false},
        ] 
    },
    {
        question: "Which of the following statements about the < template > element in HTML5 is true?",
        answers:[
            { text: "It automatically creates a shadow DOM for the enclosed elements.", correct: false},
            { text: "It is used for defining reusable HTML components in the DOM.", correct: false},
            { text: "It forces lazy loading for images and embedded content.", correct: false},
            { text: "It holds HTML content that is not rendered until it is inserted into the document via JavaScript.", correct: true},
        ] 
    },
    {
        question: "What is the effect of will-change: transform; in CSS?",
        answers:[
            { text: "It forces an immediate re-render of the transformed element.", correct: false},
            { text: "It hints to the browser that an element’s transformation is likely to change, improving rendering performance.", correct: true},
            { text: "It prevents an element from being transformed dynamically.", correct: false},
            { text: "It disables GPU acceleration for transformed elements.", correct: false},
        ] 
    },
    {
        question: "Which of the following correctly defines a CSS Grid container with exactly three equal-width columns?",
        answers:[
            { text: "display: flex; flex-template-columns: repeat(3, 1fr);", correct: false},
            { text: "display: grid; grid-template-columns: repeat(3, 1fr);", correct: true},
            { text: "display: block; column-count: 3;", correct: false},
            { text: "display: grid; grid-template-columns: auto auto auto;", correct: false},
        ] 
    },
    {
        question: "What is the difference between opacity: 0; and visibility: hidden; in CSS?",
        answers:[
            { text: "opacity: 0; disables the element, while visibility: hidden; only applies to text.", correct: false},
            { text: "opacity: 0; removes the element from the DOM while visibility: hidden; keeps it.", correct: false},
            { text: "opacity: 0; is only supported in modern browsers, while visibility: hidden; works in all browsers.", correct: false},
            { text: "opacity: 0; makes the element invisible but it still takes up space, whereas visibility: hidden; hides the element but it still affects layout.", correct: true},
        ] 
    },
    {
        question: "What is the output of the following JavaScript code? console.log([] + []);",
        answers:[
            { text: "empty string", correct: true},
            { text: "[]", correct: false},
            { text: "undefined", correct: false},
            { text: "NaN", correct: false},
        ] 
    },
    {
        question: "Which of the following JavaScript operations does NOT create a new reference in memory?",
        answers:[
            { text: "const obj2 = JSON.parse(JSON.stringify(obj1));", correct: false},
            { text: "const obj2 = { ...obj1 };", correct: false},
            { text: "Object.assign(target, source);", correct: true},
            { text: "const obj2 = Object.create(obj1);", correct: false},
        ] 
    },
    {
        question: "What will be the output of the following JavaScript code? let a = { x: 1 };let b = a;b.x = 2;console.log(a.x);",
        answers:[
            { text: "undefined", correct: false},
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "ReferenceError", correct: false},
        ] 
    },
    {
        question: "Why does the following JavaScript code return false? console.log(0.1 + 0.2 === 0.3);",
        answers:[
            { text: "Because JavaScript converts numbers to strings before comparison.", correct: false},
            { text: "Because 0.1 + 0.2 results in 0.29 due to rounding.", correct: false},
            { text: "Because 0.3 is stored as an integer internally.", correct: false},
            { text: "Because floating-point arithmetic in JavaScript is imprecise due to binary representation.", correct: true},
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