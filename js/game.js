
// 3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];
// 5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];

// 3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];
var started = false;

// Step 7 - Start the Game

        // 2. Create a new variable called level and start at level 0.
        var level = 0;

        // 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
        $(document).keydown(function() {
        if (!started) {
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
        }else {
            startOver();
        }
        });

// 2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.

// Step 4 - Check Which Button is Pressed

        // 1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

        // 2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.


$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");

         // 4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern 
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

// Step 8 - Check the User's Answer Against the Game Sequence8
    // 1. Create a new function called checkAnswer(), it should take one input with the name currentLevel


    // 3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    
    // 5. Call nextSequence() after a 1000 millisecond delay.
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Correct");
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      playSound("wrong");

      // Step 9 - Game Over

        // 3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
    }
}

// Step 2 - Create A New Pattern

        // 1. Inside game.js create a new function called nextSequence()

                // 5. Inside nextSequence(), update the h1 with this change in the value of level.
        function nextSequence() {
        userClickedPattern = [];
        level++;
        $("#level-title").text("Level " + level);

        // 2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
        var randomNumber = Math.floor(Math.random() * 4);

        
        // 4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
        var randomChosenColour = buttonColours[randomNumber];

        // 6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
        gamePattern.push(randomChosenColour);


 // Step 3 - Show the Sequence to the User with Animations and Sounds 

        // 1. Use jQuery to select the button with the same id as the randomChosenColour
        $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

        // 2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
        playSound(randomChosenColour);
        }

// Step 6 - Add Animations to User Clicks

    // 1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


// 2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


// Step 10 - Restart the Game
    // 1. Create a new function called startOver().

    
function startOver() {
console.log("starting Over");
  level = 0;
  gamePattern = [];
  started = false;

  // 3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
   $("#level-title").text("Level 0");
    nextSequence();
}