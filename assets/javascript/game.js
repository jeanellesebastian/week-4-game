/* 

1) Display a randomNumber to start the game
2) totalScore = 0 at start of game
3) click on crystal add certain # of points to player's total score
4) define 4 different crystals and their 4 different RANDOM hidden point values
5) player wins when total score is ==== to randomNumber
6) player loses when total score is > randomNumber
7) restart game when player wins or loses
8) when restart game then the randomNumber resets AND point value of crystals change 

*/

$(document).ready(function() {

	// Display a randomNumber to start the game
	// randomNumber should be between 19 and 120
	var randomNumber = Math.floor(Math.random() * 101 + 19);
		$("#randomNumber").text(randomNumber);

	// Set totalScore to be 0 to start
	var totalScore = 0;
		$("#totalScore").text(totalScore);

	var wins = 0;
		$("#wins").text(wins);

	var losses = 0;
		$("#loss").text(losses);


	// define a reset function that will reset the game if conditions are met
	var reset = function(){
		if (totalScore === randomNumber) {
			totalScore = 0;
			wins = wins + 1;
			alert("CONGRATS! YOU WON!");
		} else if (totalScore > randomNumber) {
			totalScore = 0;
			losses = losses + 1;
			alert("WHOMP WHOMP! YOU LOST! TRY AGAIN!");
		} 
		// new random and new crystals
		randomNumber = Math.floor(Math.random() * 101 + 19);
		bluePoints = Math.floor((Math.random() * 11)+ 1);
		redPoints = Math.floor((Math.random() * 11) + 1);
		yellowPoints = Math.floor((Math.random() * 11) + 1);
		greenPoints = Math.floor((Math.random() * 11 )+ 1);
		// display all the changes
		$("#randomNumber").text(randomNumber);
		$("#wins").text(wins);
		$("#loss").text(losses);
		$("#totalScore").text(totalScore);
	}

	// assign random point value to each crystal
	// how do I look these random points?
	
	var bluePoints = Math.floor((Math.random() * 11)+ 1);
	var redPoints = Math.floor((Math.random() * 11) + 1);
	var yellowPoints = Math.floor((Math.random() * 11) + 1);
	var greenPoints = Math.floor((Math.random() * 11 )+ 1);

	// associate the random points above to each crystal respectively when it is CLICKED

	// BLUE CRYSTAL ==========================
	$("#blueCrystal").click(function(){
		totalScore = totalScore + bluePoints;
		$("#totalScore").text(totalScore);
		if (totalScore >= randomNumber) {
			reset();
		}
	});

	// RED CRYSTAL ==========================
	$("#redCrystal").click(function(){
		totalScore = totalScore + redPoints;
		$("#totalScore").text(totalScore);
		if (totalScore >= randomNumber) {
			reset();
		}
	});


	// YELLOW CRYSTAL ==========================
	$("#yellowCrystal").click(function(){
		totalScore = totalScore + yellowPoints;
		$("#totalScore").text(totalScore);
		if (totalScore >= randomNumber) {
			reset();
		}
	});

	// GREEN CRYSTAL ==========================
	$("#greenCrystal").click(function(){
		// alert("Adding " + greenPoints + " to your current total score! Yippeeee!");
		totalScore = totalScore + greenPoints;
		$("#totalScore").text(totalScore);
		if (totalScore >= randomNumber) {
			reset();
		}
	});

});