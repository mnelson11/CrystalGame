

$(document).ready(function () {
  //your code here

  	var numOptions=[10,5,3,7];
  	var increment = numOptions[Math.round(Math.random())];
  	var counter =0;
  	var targetNum=getRandomArbitrary(19,120);
  	console.log(targetNum);
  	var wins=0;
  	var loses=0;

  	function getRandomArbitrary(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

  	$("#numberToGuess").append(targetNum);

	$(".gemImages").on("click", function() {
    // Clicking the button triggers an alert message.
    	// counter+=increment;
    	// alert("Your score is now: "+counter);
    	//  $("#scoreTotal").text(counter);


    	for (var i = 0; i < numOptions.length; i++) {

		    // For each iteration, we will create an imageCrystal
		    var imageCrystal = $("<img>");

		    // First each crystal will be given the class ".crystal-image".
		    // This will allow the CSS to take effect.
		    imageCrystal.addClass("crystal-image");

		    // Each imageCrystal will be given a src link to the crystal image
		    imageCrystal.attr("src", "assets/images/blue-diamond-clip-art-blue-diamond-hi.png");

		    // Each imageCrystal will be given a data attribute called data-crystalValue.
		    // This data attribute will be set equal to the array value.
		    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

		    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
		    $("#crystals").append(imageCrystal);
		 }



    	$(".crystal-image").on("click", function() {

	    // Determining the crystal's value requires us to extract the value from the data attribute.
	    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
	    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
	    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
	    
	    var crystalValue = ($(this).attr("data-crystalvalue"));
	    crystalValue = parseInt(crystalValue);
	    // We then add the crystalValue to the user's "counter" which is a global variable.
	    // Every click, from every crystal adds to the global counter.
	    counter += crystalValue;

	    // All of the same game win-lose logic applies. So the rest remains unchanged.
	    alert("New score: " + counter);

	    if (counter === targetNum) {
	      alert("You win!");
	      reset();
	    }

	    else if (counter >= targetNum) {
	      alert("You lose!!");
	      reset();
	    }

  });


  });

	function reset(){
		var numOptions=[10,5,3,7];
  		var increment = numOptions[Math.round(Math.random())];
  		var counter =0;
  		var targetNum=getRandomArbitrary(19,120);
  		alert("Prepare for a nother game!");

	}



});