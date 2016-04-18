// How fast the cars will be going
var speed = 25;
// Players
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');

// Tracks
var track1 = document.getElementById('track1');
var track2 = document.getElementById('track2');

var checkP1 = false;
var checkP2 = false;

function startGame() {
  console.log('The game is going to begin');
  if (checkP1 && checkP2) {
    window.onkeyup = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;

        if (key == 81) {
            var width = $('#player1').width();
            $('#player1').width($('#player1').width() + speed);
            $('.').width($('#player1').width() + speed);
            console.log("Q was pressed");
            if (width >= "950px"){
              alert('Player 1 is the Winner!!');
            }
        }else if (key == 80) {
            var width = $('#player2').width();
            $('#player2').width($('#player2').width() + speed);
            $('.').width($('#player2').width() + speed);
            console.log("P was pressed");
            if (width >= "950px"){
              alert('Player 2 is the Winner!!');
            }
          }
        }
      }
  };

function restartGame(){
  window.location.reload();
  console.log('The game restarted');
};

//PLayer Ready functions
function player1Ready() {
  console.log("Player 1 is ready!");
  document.getElementById("player1Check").style["background-color"]="green";
  checkP1 = true;
};

function player2Ready(){
  console.log("Player 2 is ready!");
  document.getElementById("player2Check").style["background-color"]="green";
  checkP2 = true;
};
