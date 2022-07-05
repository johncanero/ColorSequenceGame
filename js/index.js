// Start Button
// Functions to play main button audio on click
function playSound () {
    const sound = document.getElementById("startbuttonsound");
    sound.play();
    sound.addEventListener("ended", function() {
        location.href = "game.html";
    });
}