var audio = new Audio('ping2.wav');


function pesentopen1() {
    // Generate a random number between 1 and 3
    var randomNumber1 = Math.floor(Math.random() * 4) + 1;
    const audioElement = document.getElementById('myAudio');

        audioElement.currentTime = 0;
        audioElement.play();

    //do something on number
    if (randomNumber1 == 1) {
        document.getElementById("gio").src = "cat.jpg";

    } else if (randomNumber1 == 2) {
        document.getElementById("gio").src = "hund.jpg";
 
    } else if (randomNumber1 == 3) {
        document.getElementById("gio").src = "leo.jpg";
   
    } else if (randomNumber1 == 4) {
        document.getElementById("gio").src = "8324160-1000-1000-p.png";

    }
}

function pesentopen2() {
    // Generate a random number between 1 and 3
    var randomNumber2 = Math.floor(Math.random() * 4) + 1;
        const audioElement = document.getElementById('myAudio');

        audioElement.currentTime = 0;
        audioElement.play();

    //do something on number
    if (randomNumber2 == 1) {
  
        document.getElementById("git").src = "jelly.jpg";
    } else if (randomNumber2 == 2) {

        document.getElementById("git").src = "monkey.jpg";
    } else if (randomNumber2 == 3) {

        document.getElementById("git").src = "ele.jpg";
    } else if (randomNumber2 == 4) {
        document.getElementById("git").src = "8324160-1000-1000-p.png";
  
    }
}
function pesentopen3() {
    // Generate a random number between 1 and 3
    var randomNumber3 = Math.floor(Math.random() * 4) + 1;
        const audioElement = document.getElementById('myAudio');

        audioElement.currentTime = 0;
        audioElement.play();

    //do something on number
    if (randomNumber3 == 1) {
        document.getElementById("gith").src = "R.jpg";

    } else if (randomNumber3 == 2) {
        document.getElementById("gith").src = "vogel.jpg";

    } else if (randomNumber3== 3) {
        document.getElementById("gith").src = "baer.jpg";

    } else if (randomNumber3 == 4) {
        document.getElementById("gith").src = "8324160-1000-1000-p.png";

    }
}
