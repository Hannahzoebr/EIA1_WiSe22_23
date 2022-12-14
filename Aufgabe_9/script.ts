namespace Aufgabe9 {

    window.addEventListener("load", addClickListenerDrumpad);

    function play(soundQuelle: string): void {
        var sound: HTMLAudioElement = new Audio(soundQuelle);
        sound.play();
    }

    function addClickListenerDrumpad(): void {
        document.querySelector("#button1").addEventListener("click", function (): void { playSample("./sound/A.mp3"); });
        document.querySelector("#button2").addEventListener("click", function (): void { playSample("./sound/C.mp3"); });
        document.querySelector("#button3").addEventListener("click", function (): void { playSample("./sound/F.mp3"); });
        document.querySelector("#button4").addEventListener("click", function (): void { playSample("./sound/G.mp3"); });
        document.querySelector("#button5").addEventListener("click", function (): void { playSample("./sound/hihat.mp3"); });
        document.querySelector("#button6").addEventListener("click", function (): void { playSample("./sound/kick.mp3"); });
        document.querySelector("#button7").addEventListener("click", function (): void { playSample("./sound/laugh-1.mp3"); });
        document.querySelector("#button8").addEventListener("click", function (): void { playSample("./sound/laugh-2.mp3"); });
        document.querySelector("#button9").addEventListener("click", function (): void { playSample("./sound/snare.mp3"); });
        document.querySelector(".play").addEventListener("click", function (): void { playBeat(); });
        document.querySelector(".shuffle").addEventListener("click", function (): void  { remix(); });
    }

    var beat: string[] = [
        "./sound/kick.mp3",
        "./sound/snare.mp3",
        "./sound/hihat.mp3"
    ];

    var alleToene: string[] = [
        "./sound/A.mp3",
        "./sound/C.mp3",
        "./sound/F.mp3",
        "./sound/G.mp3",
        "./sound/hihat.mp3",
        "./sound/kick.mp3",
        "./sound/laugh-1.mp3",
        "./sound/laugh-2.mp3",
        "./sound/snare.mp3"
    ];

    var playing: boolean = false;

    var intervalId: number;

    function playSample(soundQuelle: string): void {
        play(soundQuelle);
    }

    function playBeat(): void {
        if (playing == false) {
            startBeat();
        } else {
            stopBeat();
        }
    }

    function startBeat(): void {
        playing = true;
        var zaehler: number = 0;
        intervalId = setInterval(function (): void  {
            play(beat[zaehler]);
            zaehler = zaehler + 1;
            if (zaehler == beat.length) {
                zaehler = 0;
            }
        }, 500);
    }

    var i: number = 0;

    function stopBeat(): void {
        if (document.querySelector(".play i").classList.contains("fa-play")) {
            document.querySelector(".play i").classList.add("fa-stop");
            document.querySelector(".play i").classList.remove("fa-play");
        }
        
        else {
        document.querySelector(".play i").classList.remove("fa-stop");
        document.querySelector(".play i").classList.add("fa-play");
        }
        
        clearInterval(intervalId);

        playing = false;
    }

    function remix(): void {
        playing = true;
        var zaehler: number = 0;
        var toeneTotal: number = 3;
        let i: number = 0;
        while (i < toeneTotal) {
        var item: string = alleToene[Math.floor(Math.random() * alleToene.length)];
        alleToene.push(item);
        i = i + 1;
        }
        intervalId = setInterval(function (): void {
        play(alleToene[zaehler]);
        zaehler = zaehler + 1;
        if (zaehler == alleToene.length) {
        zaehler = 0;
        }
        }, 500);
    }}