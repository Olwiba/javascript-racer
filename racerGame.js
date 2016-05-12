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
var checkP3 = false;
var checkP4= false;

// Player win

var player1win = false;
var player2win = false;
var player3win = false;
var player4win = false;

var pageWidth = $(window).width();


function ready() {
  if (checkP1 && checkP2) {
		console.log('The game is going to begin');
		removeMenu();
      }  else {
		  alert ("You need at least two people to play!");
	  }
  };

  function removeMenu() {
		$("#info").css("width", "100%");
		$("#info").css("border-radius", "0px");
		$("#info").css("padding", "0px");
		$("#info").css("padding-bottom", "50px");
		$(".content").css("margin", "0px");
		$(".playerControls").css("display", "none");
		$("table").css("display", "none");
		$(".header-img").css("width", "50%");
		$("#tracks").css("display", "inline");
		$(".gameStart").css("display", "inline");

		if (!checkP3 && !checkP4) {
			$("#player3").css("display", "none");
			$("#player4").css("display", "none");
		} else if (!checkP4) {
			$("#player4").css("display", "none");
		} else if  (!checkP3) {
			$("#player3").css("display", "none");
		}
  }

  function resetGame() {
	$("#player1").css("width", "250px");
	$("#player2").css("width", "250px");
  }


  function startGame() {
	$("#output").html("3");
	window.setTimeout(function() {$("#output").html("2")}, 1000);
	window.setTimeout(function() {$("#output").html("1")}, 2000);
	window.setTimeout(function() {$("#output").html("Race!"); enableControls();}, 3000);

	window.setInterval(function() {
	if ($("#player1").width() >= pageWidth) {
		player1win = true;
		$("#tracks").css("display", "none");
    $(".startbutton2").css("display", "none");
		$("#output").html("Congratulations, Player 1 has Won!");
	} else if ($("#player2").width() >= pageWidth) {
		console.log("player2 wins");
		player2win = true;
		$("#tracks").css("display", "none");
    $(".startbutton2").css("display", "none");
		$("#output").html("Congratulations, Player 2 has Won!");
	} else if ($("#player3").width() >= pageWidth) {
		console.log("player3 wins");
		player3win = true;
		$("#tracks").css("display", "none");
    $(".startbutton2").css("display", "none");
		$("#output").html("Congratulations, Player 3 has Won!");
	} else if ($("#player4").width() >= pageWidth) {
		console.log("player4 wins");
		player4win = true;
		$("#tracks").css("display", "none");
    $(".startbutton2").css("display", "none");
		$("#output").html("Congratulations, Player 4 has Won!");
	}
	}, 100);

  }

function restartGame(){
  window.location.reload();
  console.log('The game restarted');
}

function enableControls() {
	window.setInterval(function() {
	if (!player1win && !player2win) {
	window.onkeyup = function(e) {
	var key = e.keyCode ? e.keyCode : e.which;

	if (key == 81) {
		$('#player1').width($('#player1').width() + speed);
		console.log("Q was pressed");
	}else if (key == 80) {
		var width = $('#player2').width();
		$('#player2').width($('#player2').width() + speed);
		console.log("P was pressed");
	}else if (key == 90) {
		var width = $('#player3').width();
		$('#player3').width($('#player3').width() + speed);
		console.log("Z was pressed");
	}else if (key == 77) {
		var width = $('#player4').width();
		$('#player4').width($('#player4').width() + speed);
		console.log("/ was pressed");
	}
	}
	}
	}, 100);
}

// Player Ready Buttons
function player1Ready() {

	var image = document.getElementById('player1rdy');

	if (image.src.match("./Images/p1Nready.png")) {
		image.src="./Images/p1ready.png";
		console.log("Player 1 is ready!");
		checkP1 = true;
	} else {
		image.src="./Images/p1Nready.png";
		console.log("Player 1 is not ready!");
		checkP1 = false;
	}

};

function player2Ready() {

	var image = document.getElementById('player2rdy');

	if (image.src.match("./Images/p2Nready.png")) {
		image.src="./Images/p2ready.png";
		console.log("Player 2 is ready!");
		checkP2 = true;
	} else {
		image.src="./Images/p2Nready.png";
		console.log("Player 2 is not ready!");
		checkP2 = false;
	}

};


function player3Ready() {

	var image = document.getElementById('player3rdy');

	if (image.src.match("./Images/p3Nready.png")) {
		image.src="./Images/p3ready.png";
		console.log("Player 3 is ready!");
		checkP3 = true;
	} else {
		image.src="./Images/p3Nready.png";
		console.log("Player 3 is not ready!");
		checkP3 = false;
	}

}

function player4Ready() {

	var image = document.getElementById('player4rdy');

	if (image.src.match("./Images/p4Nready.png")) {
		image.src="./Images/p4ready.png";
		console.log("Player 4 is ready!");
		checkP4 = true;
	} else {
		image.src="./Images/p4Nready.png";
		console.log("Player 4 is not ready!");
		checkP4 = false;
	}

};
