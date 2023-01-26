/* 
Für Klicklaute werden hier die sounds und bei was der Ton zu hören sein soll definiert
*/

function play(id) {
    const audioElement = document.getElementById(id);
	
	resetAll();

    if (audioElement.paused) {
        audioElement.play();
    }
}

function resetAll() {
	const audioElements = document.querySelectorAll('audio[id^="sound-"]');
	
	audioElements.forEach(audioElement => {
		audioElement.pause();
		audioElement.currentTime = 0;
	});
}

 /*
   Sieben HTML Fragen werden erstellt + deren Antwortmöglichkeiten,
  leider funktionierten keine zeichen wie <> und "" bei den Antworten, somit fehlt dies z.B. bei <!DOCTYPE html>
*/
   var html_question = [
    {
        "frage": "Wie beginnt man in einem HTML- Dokument?",
        "antwort": ["!DOCTYPE html", "HTML", "HTML start"],
        "richtigeAntwort": "!DOCTYPE html",
        "link": "https://www.goconqr.com/de/quiz/4751575/html-quiz-grundlagen"
    },
    {
        "frage": "Wo sieht man im Browser den text von <head> <title> TEXT </title> </head>",
        "antwort": ["Ganz oben im Tap", "Ganz oben auf der Website", "In der Menüleiste (Wo die Domain, der Link steht)"],
        "richtigeAntwort": "Ganz oben im Tap",
        "link": "https://www.goconqr.com/de/quiz/4751575/html-quiz-grundlagen"
    },
    {
        "frage": "Was befindet sich meistens innerhalb des <section> Tags?",
        "antwort": ["Die Navigation... <nav>", "Ein Artikel... <article>", "Der Head Bereich... <head>"],
        "richtigeAntwort": "Ein Artikel.... <article>",
        "link": "https://www.goconqr.com/de/quiz/4751575/html-quiz-grundlagen"
    },
    {
        "frage": "Stimmt es, das zu HTML IMMER eine CSS Datei gehört?",
        "antwort": ["Wahr", "Falsch", "teilweise richtig"],
        "richtigeAntwort": "Falsch",
        "link": "https://www.goconqr.com/de/quiz/4751575/html-quiz-grundlagen"
    },
    {
        "frage": "Was befindet sich im Tag <img src=''...'' />?",
        "antwort": ["Ein Bild", "Ein Text", "Eine Datei"],
        "richtigeAntwort": "Ein Bild",
        "link": "https://www.goconqr.com/de/quiz/4751575/html-quiz-grundlagen"
    },
    {
        "frage": "Welches ist das richtige HTML-Element für die größte Überschrift",
        "antwort": ["h6", "h1", "heading"],
        "richtigeAntwort": "h1",
        "link": "https://www.w3schools.com/quiztest/quiztest.asp?qtest=HTML"
    },
    {
        "frage": "Was ist das richtige HTML-Element zum Einfügen eines Zeilenumbruchs?",
        "antwort": ["br", "break", "Ib"],
        "richtigeAntwort": "<br>",
        "link": "https://lerneprogrammieren.de/html-fragen-bewerbungsgespraech/"
    }
    ];
 /*
  Sieben css Fragen werden erstellt + deren Antwortmöglichkeiten
*/
    var css_question = [
        {
            "frage": "Welche Eigenschaft wird verwendet, um die Textfarbe eines Elements zu ändern?",
            "antwort": ["fontcolor:", "textcolor:", "color:"],  
            "richtigeAntwort": "color:",
            "link": "https://www.cssportal.com/css-quiz/"
        },
        {
            "frage": "Für was benutzt man CSS?",
            "antwort": ["Um ein HTML Dokument zu stylen", "Um ein typescript Dokument zu stylen", "CSS gibt es nicht"],
            "richtigeAntwort": "Um ein HTML Dokument zu stylen",
            "link": "https://www.cssportal.com/css-quiz/"
        },
        {
            "frage": "Das # Symbol gibt an, dass der Selektor?",
            "antwort": ["class", "tag", "id"],
            "richtigeAntwort": "id",
            "link": "https://www.cssportal.com/css-quiz/"
        },
        {
            "frage": "Wofür steht CSS?",
            "antwort": ["Custom Style Sheets", " Cascading Style Sheets", "Computer Style Sheets"],
            "richtigeAntwort": "Cascading Style Sheets",
            "link": "https://www.cssportal.com/css-quiz/"
        },
        {
            "frage": "Wie lautet die korrekte CSS-Syntax zum Ändern des Schriftartnamens?",
            "antwort": ["font-name:", "font:", "font-family:"],
            "richtigeAntwort": "font-family:",
            "link": "https://www.cssportal.com/css-quiz/"
        },
        {
            "frage": "Welches HTML-Attribut wird verwendet, um Inline-CSS-Stile zu definieren?",
            "antwort": ["CSS", "Style", "Type"],
            "richtigeAntwort": "Style",
            "link": "https://www.cssportal.com/css-quiz/"
        },
        {
            "frage": "Welche CSS-Eigenschaft steuert die Textgröße?",
            "antwort": ["font-height", "text-size", "font-size"],
            "richtigeAntwort": "font-size",
            "link": "https://www.cssportal.com/css-quiz/"
        }
    ];
    /*
  Sieben typescript Fragen werden erstellt + deren Antwortmöglichkeiten
*/
    var typescript_question = [
        {
            "frage": "Wer hat TypeScript entwickelt und entworfen?",
            "antwort": ["Microsoft", "Amazon", "TypeScript"],          
            "richtigeAntwort": "Microsoft",
            "link": "https://www.proprofs.com/quiz-school/quizreport.php?title=3dq-typescript-test&sid=304252457"
        },
        {
            "frage": "Welches der folgenden ist das Schreibprinzip von TypeScript?",
            "antwort": ["Gradual", "Duck", "Beide"],
            "richtigeAntwort": "Beide",
            "link": "https://www.proprofs.com/quiz-school/quizreport.php?title=3dq-typescript-test&sid=304252457"
        },
        {
            "frage": "Welche der folgenden ist eine Dateinamenerweiterung für TypeScript?",
            "antwort": [".tsx", ".txt", ".nod"],
            "richtigeAntwort": ".tsx",
            "link": "https://www.proprofs.com/quiz-school/quizreport.php?title=3dq-typescript-test&sid=304252457"
        },
        {
            "frage": "Welche der folgenden Computerprogrammiersprachen haben die Erstellung von TypeScript beeinflusst?",
            "antwort": [ "JavaScript", "C#", "Beide"],
            "richtigeAntwort": "Beide",
            "link": "https://www.tutorialsteacher.com/online-test/typeScript-test1"
        },
        {
            "frage": "Die folgenden sind zurückportierte Funktionen von TypeScript, außer?",
            "antwort": ["Classes", "„Methods", "Modules"],
            "richtigeAntwort": "Methods",
            "link": "https://www.proprofs.com/quiz-school/quizreport.php?title=3dq-typescript-test&sid=304252457"
        },
        {
            "frage": " .... sind die Art, Code in TypeScript zu organisieren.",
            "antwort": ["Method", "Modules", "Classes"],
            "richtigeAntwort": "Modules",
            "link": "https://www.proprofs.com/quiz-school/quizreport.php?title=3dq-typescript-test&sid=304252457/"
        },
        {
            "frage": "kann verwendet werden, um serverseitige und clientseitige Anwendungen zu schreiben. Wahr oder Falsch?",
            "antwort": ["Wahr", "Falsch", "teilweise richtig"],
            "richtigeAntwort": "Wahr",
            "link": "https://www.tutorialsteacher.com/online-test/typeScript-test1"
        }
    ];
  //Konstante aus der HTML-datei, welche nicht immer zu sehen sind und hier aus und eingeblendet werden
    var start = document.querySelector(".Start");
    var categories = document.querySelector(".categories-container");
    var quiz = document.querySelector(".quiz");
    var question = document.querySelector(".question");
    var answeroption = document.querySelectorAll(".answer");
    var answercontainer = document.querySelector(".answers");
    var response = document.querySelector(".response");
    var Punktestand = document.querySelector(".counter");
    var resultContainer = document.querySelector(".result_container");
    var result = document.querySelector(".result");
    var footer = document.querySelector(".footer");

   //Variable die für die Funktion gebraucht werden
    var rightanswer = "";
    var punkte = 0;
    var usedNumquestion = [];
    var currentcategory;
    var currentquestion;
    var ismixed = false;
  /*
  Hier wird Let's Start ausgeblendet und die vier Kategoriefelder eingeblendet
*/
    function letsStart() {
        start.setAttribute('style', 'display:none');
        categories.setAttribute('style', 'display:block');
    }

 /*
  Hier geht es um die Funktion Gemischt. Jeder Kategorie wird eine Zahl von 0 und 2 zugewiesen. 
  Somit wird sobald man eine zufällige Kategorie gewählt hat die Fucktion "categoryselected" aufgerufen
*/
    function mixedcategory() {
        var ranNum = Math.floor(Math.random() * 3);
        var category;
        switch (ranNum) {
            case 0: {
                category = html_question;
                currentcategory = html_question;
                break;
            }
            case 1: {
                category = css_question;
                currentcategory = css_question;
                break;
            }
            case 2: {
                category = typescript_question;
                currentcategory = typescript_question;
                break;
            }
        }
        categoryselected(category);
    }
   /*
  Funktion die aufgerufen wird wenn eine Kategorie/HTML, CSS, Typescript) ausgewählt wurde
  Kategorien werden ausgeblendet und das Quiz wird eingeblendet
  Eine Zähl-Schleife, die normalerweise nur einen Durchlauf hat
  In der Schleife wird eine zufällige Zahl zwischen 0 bis 6 generiert 
  In einer IF-Anweisung wird abgefragt ob diese zufällige Zahl im Array "usedNumquestion" vorhanden ist
  wenn nicht dann:
      die Frage wird angezeigt
      die richtige Antwort wird zwischengespeichert
      die zufällige Zahl wird dem Array hinzugefügt
      und die aktuelle Zahl wird gespeichert
      Schleife ist dann beendet
  wenn ja:
      wird die Zählvariable um eins reduziert (Schleife geht weiter)
      continue -> neue Schleifeniteration wird gestartet
*/
    function categoryselected(category) {
        categories.setAttribute('style', 'display:none');
        quiz.setAttribute('style', 'display:block');
        var ranNum;
        for (var i = 0; i < 1; i++) {
            ranNum = Math.floor(Math.random() * 7);
            if (usedNumquestion.includes(ranNum) == false) {
                usedNumquestion.push(ranNum);
                question.innerText = category[ranNum].frage;
                rightanswer = category[ranNum].richtigeAntwort;
                currentquestion = ranNum;
            }
            else {
                i--;
                continue;
            }
        }
        generateAnswers(category[ranNum]);
    }
    /*
        Funktion die aufgerufen wird, um Antworten einer Frage zu generieren
        Eine ZÃ¤hl-Schleife, die normalerweise nur drei DurchlÃ¤ufe (Anzahl der Antwort-Container) hat
        In der Schleife wird eine zufÃ¤llige Zahl zwischen 0 bis 2 generiert
        In einer IF-Anweisung wird abgefragt ob diese zufÃ¤llige Zahl im Array "usenNumanswer" vorhanden ist
        wenn nicht dann:
            die zufÃ¤llige Zahl wird dem Array hinzugefÃ¼gt
            die Antwort wird angezeigt
        wenn ja:
            wird die ZÃ¤hlvariable um eins reduziert
            continue -> neue Schleifeniteration wird gestartet
        Es geht so lange weiter bis alle drei Amtworten in einer zufÃ¤lligen Reihenfolge angezeigt wird
    */
    function generateAnswers(whichquestion) {
        var usedNumanswer = [];
        var ranNum;
        for (var i = 0; i < answeroption.length; i++) {
            ranNum = Math.floor(Math.random() * 3);
            if (usedNumanswer.includes(ranNum) == false) {
                usedNumanswer.push(ranNum);
                answeroption[i].innerHTML = whichquestion.antwort[ranNum];
            }
            else {
                i--;
                continue;
            }
        }
    }
  /*
  Funktion die aufgerufen wird wenn eine Antwort angeklickt wurde
  Antwortmöglichkeiten wird ausgeblendet und das Ergebnis wird eingeblendet
  Wenn der Inhalt der angeklickten Antwort der richtigen Antwort entspricht:
      punkte wird um 1 erhöht
      Neuer Punktestand wird angezeigt
      Es wird anzeigt das die Antwort richtig ist
  Wenn nicht:
      Es wird anzeigt das die Antwort falsch ist und ein Link wird angezeigt, die mehr Informationen beinhaltet
*/
    function answerclicked(x) {
        answercontainer.setAttribute('style', 'display:none');
        response.setAttribute('style', 'display:block');
        if (answeroption[x].innerHTML == rightanswer) {
            punkte++;
            Punktestand.innerHTML = "Punkte: " + String(punkte);
            document.querySelector("span").innerHTML ="Sehr gut! Das war Richtig :)";
        }
        else {
            document.querySelector("span").innerHTML = "Leider lagst du hier falsch :( <br>Noch Fragen? Schau <a href='" + currentcategory[currentquestion].link + "' target='_blank'>hier</a>";
        }
    }
  /*
  Sobald alle sieben Fragen beantwortet wurden oder fünf Punkte erreicht wurden
  wird das Endergebnis/Punktestand eingeblendet und das Quiz ausgeblendet.
  Bei richtiger Antwort gibt es positives Feedback
  Bei Falscher Antwort ein negativer Feedback 
*/
    function finalresult(y) {
        resultContainer.setAttribute('style', 'display: block');
        quiz.setAttribute('style', 'display: none');
        if (y == true) {
            result.innerHTML ="Sehr gut!<br>Du hast fünf Fragen richtig beantwortet<br>Punktestand: " + String(punkte);
        }
        else if (y == false) {
            result.innerHTML =  "Es Wurden alle Fragen beantwortet<br>doch leider wurden keine fünf Punkte erreicht<br>Punktestand: " + String(punkte);
        }
    }
  /*
Neustart funktion, Start wird eingeblendet und Endergebnis wird ausgeblendet
*/
    function newRun() {
        punkte = 0;
        Punktestand.innerHTML = "Punkte: " + String(punkte);
        usedNumquestion = [];
        ismixed = false;
        resultContainer.setAttribute('style', 'display: none');
        start.setAttribute('style', 'display:block');
    }
    // Klickevents
    document.querySelector(".StartButton").addEventListener('click', letsStart);
    document.querySelector(".category_html").addEventListener('click', function () {
        currentcategory = html_question;
        categoryselected(html_question);
    });
    document.querySelector(".category_css").addEventListener('click', function () {
        currentcategory = css_question;
        categoryselected(css_question);
    });
    document.querySelector(".category_typescript").addEventListener('click', function () {
        currentcategory = typescript_question;
        categoryselected(typescript_question);
    });
    document.querySelector(".category_gemischt").addEventListener('click', function () {
        ismixed = true;
        mixedcategory();
    });
    var _loop_1 = function (i) {
        answeroption[i].addEventListener('click', function () {
            answerclicked(i);
        });
    };
    for (var i = 0; i < answeroption.length; i++) {
        _loop_1(i);
    }
   /*
  Bei klicken von Weiter wird geschaut welche Kategorie gewählt wurde
Nach beantwortung aller fragen wird gecheckt ob alle 5 Punkte erreicht wurden oder nicht
*/
    document.querySelector(".weiter").addEventListener('click', function () {
        if (ismixed) {
            mixedcategory();
        }
        else {
            categoryselected(currentcategory);
        }
        answercontainer.setAttribute('style', 'display:block');
        response.setAttribute('style', 'display:none');
        if (usedNumquestion.length >= 7) {
            if (punkte >= 5) {
                finalresult(true);
            }
            else {
                finalresult(false);
            }
        }
        if (punkte >= 5) {
            finalresult(true);
        }
    });
    document.querySelector(".restart").addEventListener('click', newRun);
    //# sourceMappingURL=script.js.map