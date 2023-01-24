// Import stylesheets
import './style.css';
(function() {
  const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz() {
    // Speichern der HTML-Ausgabe 
    const output = [];

    // für jede Frage...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // Speichern der Antwortmöglichkeiten 
      const answers = [];

      // Für jede verfügbare Antwort...
      for ( let letter in currentQuestion.answers) {
        // ...Hinzufügen von HTML-Optionsfeld
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // Hinzufügen der Frage und der Antwort
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    //Kombinierung der Ausgabeliste zu einem HTML-String und platzierung auf der Seite
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
   

    let numCorrect = 0;

    let numAtten =0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      // Ausgewählte Antwort finden
      const answerContainer = answerContainers[questionNumber];
       console.log(answerContainer)
      const selector = `input[name=question${questionNumber}]:checked`
      const userAnswer = (answerContainer.querySelector(selector) || {})['value'];
       const useratten = (answerContainer.querySelector(selector) || {})['name'];
       if(useratten) {
         numAtten++;
       }
      // Wenn die Antwort richtig ist
      if (userAnswer === currentQuestion.correctAnswer) {
        // Nummer der richtigen Antwort
        numCorrect++;

        // grün einfärben der Antwort
        answerContainers[questionNumber]['style'].color = "lightgreen";
      } else {
        // Wenn keine Antwort oder Falsch dann rot färben
        answerContainers[questionNumber]['style'].color = "red";
      }
    });
    // Anzeige der Anzahl der richtigen Antworten von insgesamt
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    attenContainer.innerHTML = `Atten ${numAtten} questions out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const attenContainer = document.getElementById("atten");
  const submitButton = document.getElementById("submit");

  // Quiz sofort anzeigen
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // beim Absenden Ergebnisse anzeigen
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
