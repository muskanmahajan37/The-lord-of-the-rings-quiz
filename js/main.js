const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextquestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextquestion()
}

function setNextquestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct 
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    }else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: "what is the director's name",
        answers: [
            {text: 'Peter Jackson', correct: true},
            {text: 'Steven Spielberg', correct: false},
            {text: 'Alfred Hitchcock', correct: false},
            {text: 'Ingmar Bergman', correct: false}
        ]
    },
    {
        question: "Who is Elrond's daughter ?",
        answers: [
            {text: 'Éowyn', correct: false},
            {text: 'Arwen', correct: true},
            {text: 'Galadriel', correct: false},
            {text: 'Elanor', correct: false}
        ]
    },
    {
        question: "in 'The Fellowship of the Ring', Boromir, dies saving which  characters??",
        answers: [
            {text: 'Frodo and Sam', correct: false},
            {text: 'Merry and Pippin ', correct: true},
            {text: 'Legolas and Giml', correct: false},
            {text: "he didn't die", correct: false}
        ]
    },
    {
        question: "where the Shire is located in regular earth",
        answers: [
            {text: 'Brazil', correct: false},
            {text: 'Holland', correct: false},
            {text: 'new Zealand', correct: true},
            {text: "Russia", correct: false}
        ]
    },
    {
        question: "What is the Bilbo's sword called",
        answers: [
            {text: 'Sting', correct: true},
            {text: 'old blade', correct: false},
            {text: 'Sharp', correct: false},
            {text: "killer", correct: false}
        ]
    },
    {
        question: "what the 9 Nazguls used to be",
        answers: [
            {text: 'elves', correct: false},
            {text: 'men', correct: true},
            {text: 'Uruk-hai', correct: false},
            {text: "orcs", correct: false}
        ]
    },
]