

const quizData = [
    {
        question: "Which language does your browser understands?",
        a:"Java",
        b:"C",
        c:"python",
        d:"javascript",
        correct:"d",

    },

    {
        question: "Which of these is not a type of CSS stylings?",
        a:"Outline",
        b:"Inline",
        c:"Embedded",
        d:"External",
        correct:"a",

    },

    {
        question: "Which of these is not a CSS framework?",
        a:"Bootstrap",
        b:"Tailwind",
        c:"Blueprint",
        d:"styleme",
        correct:"d",

    },
    {
        question: "Which does HTML stands for?",
        a:"Hybrid Text Markup Language",
        b:"Hyper Text Making Language",
        c:"Hyper Text Markup Language",
        d:"None of the above",
        correct:"d",

    },
    {
        question: "Where is an HTML document document is the correct place to refer to an external style sheet?",
        a:"At the beginning",
        b:"In the <body>section",
        c:"In the <head>section",
        d:"Just anywhere",
        correct:"c",

    },
    {
        question: "What is the HTML element used to display an image?",
        a:"<image>",
        b:"<picture>",
        c:"<img>",
        d:"<pic>",
        correct:"b",

    },
    {
        question: "What is the HTML element used to display an image?",
            a:"// This is an HTML comment",
            b:" This is an HTML comment */",
            c:"<!-- This is an HTML comment-->",
            d:"",
            correct:"b",
    
        },
    {

        question:"Which of the following optional table tags is used to add a short description above a table?",
        a:"<caption>",
        b:"<description>",
        c:"<title>",
        d:"<p>",
        correct:"a",

    },
    {
        question: "Which of the following HTML tags is not valid??",
        a:"<h1>",
        b:"<h8>",
        c:"<h5>",
        d:"<h3>",
        correct:"b",

    },
    {
        question: "What is the HTML element used to display an image?",
        a:"<image>",
        b:"<picture>",
        c:"<img>",
        d:"<pic>",
        correct:"b",

    },




];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const question= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
// const icon_tick =document.getElementsByClassName('.icon_tick')
// const icon_cross =document.getElementsByClassName('.icon_cross')
// let userName = document.getElementById("user").value;

let currentQuiz = 0
let score = 0

loadQuiz()


function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id

        }   
})
return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score ++
        }
        currentQuiz++
        if(currentQuiz < quizData.length){  

            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick = "location.reload()">Reload</button>
            
`
        }

    }
})