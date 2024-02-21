var go = true;
$(document).keydown(function () {
  if (go) {
    numgen();
   
    console.log(ans);
    go = false;
  }
});

var color = ["red", "blue", "green", "yellow"];
var sol = [];
var ans = [];
var level = 0;
function numgen() {
   ans=[];
  $(".head").text("level " + level);
  var t = Math.floor(Math.random() * 4);
  var n = color[t];

  sol.push(n);

  $("#" + n)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  var audio = new Audio(n + ".mp3");
  audio.play();
  level++;

  console.log(sol);
}

$(".btn").click(function () {
  var q = $(this).attr("id");
  var audio = new Audio(q + ".mp3");
  audio.play();
  $("#" + q).addClass("pressed");
  setTimeout(function () {
    $("#" + q).removeClass("pressed");
  }, 50);
  
  ans.push(q);

  anscheck(ans.length-1);

  console.log(ans);
});

function anscheck(lel){
if(ans.length==sol.length){
  if(ans[lel]==sol[lel]){
    setTimeout(function () {
    numgen();
  }, 1200);
 
  }
  else{
    again();
  }
}
}
function again(){
  $("body").addClass("game-over");
 setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
  $(".head").text("try again");
  var audio = new Audio("wrong.mp3");
  audio.play();
  sol=[];
  level=0;
  go = true;

}
/*

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
*/