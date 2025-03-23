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
        question: "Which HTML5 element is used to define self-contained content, such as blog posts or news articles?",
        answers:[
            { text: "< section >", correct: false},
            { text: "< article >", correct: true},
            { text: "< div >", correct: false},
            { text: "< main >", correct: false},
        ] 
    },
    {
        question: "What is the purpose of the aria-label attribute in HTML?",
        answers:[
            { text: "It provides accessibility by defining a label for screen readers.", correct: true},
            { text: "It creates a tooltip when the user hovers over an element.", correct: false},
            { text: "It applies styling to an element using ARIA.", correct: false},
            { text: "It allows JavaScript to dynamically rename an element.", correct: false},
        ] 
    },
    {
        question: "Which HTML tag is used to embed external JavaScript files?",
        answers:[
            { text: "< code >", correct: false},
            { text: "< js >", correct: false},
            { text: "< javascript >", correct: false},
            { text: "< script >", correct: true},
        ] 
    },
    {
        question: "What is the correct HTML for creating a dropdown selection menu?",
        answers:[
            { text: "< dropdown >< option >Choice< /option >< /dropdown >", correct: false},
            { text: "< select >< option >Choice< /option >< /select >", correct: true},
            { text: "< list >< item >Choice< /item >< /list >", correct: false},
            { text: "< input type = dropdown >", correct: false},
        ] 
    },
    {
        question: "Which attribute is used to specify that an input field must be filled out before submitting a form?",
        answers:[
            { text: "validate", correct: false},
            { text: "required", correct: true},
            { text: "mandatory", correct: false},
            { text: "fillout", correct: false},
        ] 
    },
    {
        question: "Which CSS property is used to create space between an element's content and its border?",
        answers:[
            { text: "gap", correct: false},
            { text: "margin", correct: false},
            { text: "border-spacing", correct: false},
            { text: "padding", correct: true},
        ] 
    },
    {
        question: "What does position: absolute; do in CSS?",
        answers:[
            { text: "Positions an element relative to its nearest positioned ancestor.", correct: true},
            { text: "Centers an element within its parent container.", correct: false},
            { text: "Moves an element to the top of the document.", correct: false},
            { text: "Makes an element stay fixed at the top of the viewport.", correct: false},
        ] 
    },
    {
        question: "Which CSS unit is relative to the font size of the root <html> element?",
        answers:[
            { text: "%", correct: false},
            { text: "vh", correct: false},
            { text: "em", correct: true},
            { text: "rem", correct: false},
        ] 
    },
    {
        question: "What will console.log(typeof NaN); output?",
        answers:[
            { text: "null", correct: false},
            { text: "undefined", correct: false},
            { text: "number", correct: true},
            { text: "NaN", correct: false},
        ] 
    },
    {
        question: "What happens when you use const to declare an object in JavaScript?  ",
        answers:[
            { text: "The entire object becomes immutable.", correct: false},
            { text: "The object can no longer have new properties added to it.", correct: false},
            { text: "The object cannot be deleted from memory.", correct: false},
            { text: "The variable reference cannot be reassigned, but the object's properties can be modified.", correct: true},
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