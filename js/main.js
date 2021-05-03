const iniciar = document.querySelector(".iniciar");
const next = document.querySelector(".next");
const respostas = document.querySelector(".respostas");
const overlay = document.querySelector(".overlay");
let options = document.querySelectorAll(".btn");
let pergunta = respostas.querySelector("h1");
let random = 0;

iniciar.addEventListener("click", () => {
  startGame();
});

function randomNumber() {
  random = Math.floor(Math.random() * 4);
}

function startGame() {
  randomNumber();
  iniciar.classList.add("hide");
  respostas.classList.remove("hide");

  /*pergunta */
  pergunta.innerHTML = quiz[random].question;

  /*opções*/
  options.forEach((item, index) => {
    item.innerHTML = quiz[random].answer[index].text;
  });
}

/*check answer */
options.forEach((item, index) => {
  item.addEventListener("click", () => {
    next.classList.remove("hide");
    overlay.classList.remove("hide");
    setColor();

    //set background-color
    let background = quiz[random].answer[index].correct;
    if (background) {
      overlay.style.backgroundColor = "rgba(60, 250, 43, 0.3)";
    } else {
      overlay.style.backgroundColor = "rgba(248, 0, 0, 0.2)";
    }
  });
});

function setColor() {
  quiz[random].answer.forEach((button, position) => {
    if (button.correct) {
      options[position].style.backgroundColor = "green";
    } else {
      options[position].style.backgroundColor = "red";
    }
  });
}

/*next question */
next.addEventListener("click", () => {
  randomNumber();
  next.classList.add("hide");
  overlay.classList.add("hide");
  options.forEach((item) => {
    item.style.backgroundColor = "rgb(60, 145, 243)";
  });
  pergunta.innerHTML = quiz[random].question;
  /*options*/
  options.forEach((item, index) => {
    item.innerHTML = quiz[random].answer[index].text;
  });
});

var quiz = [
  {
    question: "what is the director's name",
    answer: [
      { text: "Peter Jackson", correct: true },
      { text: "Steven Spielberg", correct: false },
      { text: "Alfred Hitchcock", correct: false },
      { text: "Ingmar Bergman", correct: false },
    ],
  },
  {
    question: "Who is Elrond's daughter ?",
    answer: [
      { text: "Éowyn", correct: false },
      { text: "Arwen", correct: true },
      { text: "Galadriel", correct: false },
      { text: "Elanor", correct: false },
    ],
  },
  {
    question:
      "in 'The Fellowship of the Ring', Boromir, dies saving which  characters??",
    answer: [
      { text: "Frodo and Sam", correct: false },
      { text: "Merry and Pippin ", correct: true },
      { text: "Legolas and Giml", correct: false },
      { text: "he didn't die", correct: false },
    ],
  },
  {
    question: "where the Shire is located in regular earth",
    answer: [
      { text: "Brazil", correct: false },
      { text: "Holland", correct: false },
      { text: "new Zealand", correct: true },
      { text: "Russia", correct: false },
    ],
  },
  {
    question: "question: What is the Bilbo's sword called",
    answer: [
      { text: "Sting", correct: true },
      { text: "old blade", correct: false },
      { text: "Sharp", correct: false },
      { text: "killer", correct: false },
    ],
  },
  {
    question: "what the 9 Nazguls used to be",
    answer: [
      { text: "elves", correct: false },
      { text: "men", correct: true },
      { text: "Uruk-hai", correct: false },
      { text: "orcs", correct: false },
    ],
  },
];
