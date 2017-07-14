

$(document).ready(function () {
  //your code here

  	var counter =0;
  	var targetNum=getRandomArbitrary(19,120);
  	var wins=0;
  	var loses=0;
  	var valueArray=[];
  	var numOptions=[1,2,3,4];

  	function getRandomArbitrary(min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

  	 $("#numberToGuess").text("Target number: "+targetNum);


    

    for (var i = 0; i < numOptions.length; i++) {
    	var value = getRandomArbitrary(1,12);
    	valueArray.push(value);
    	console.log(valueArray[i]);
	    
	}

	$(".gemImages").on("click",function(){
		if($(event.target).attr("id")=="gem1"){
			counter+=valueArray[0];
		}
		if($(event.target).attr("id")=="gem2"){
			counter+=valueArray[1];
		}
		if($(event.target).attr("id")=="gem3"){
			counter+=valueArray[2];
		}
		if($(event.target).attr("id")=="gem4"){
			counter+=valueArray[3];
		}

		//alert("New Score: "+ counter);
		$("#scoreTotal").text(counter);
		$(".winCounter").text("Wins: "+wins+" Loses: "+loses);

		 if (counter === targetNum) {
	      alert("You win!");
	      wins++;
	      reset();
	    }

	    else if (counter >= targetNum) {
	      alert("You lose!!");
	      loses++;
	      reset();
	    }
	})

 

	function reset(){
	  	counter =0;
	  	targetNum=getRandomArbitrary(19,120);
	  	valueArray=[];
  		alert("Prepare for another game!");
  		$("#scoreTotal").text(counter);
  		$("#numberToGuess").text("Target number: "+targetNum);
  		$(".winCounter").text("Wins: "+wins+" Loses: "+loses);
    

	    for (var i = 0; i < numOptions.length; i++) {
	    	var value = getRandomArbitrary(1,12);
	    	valueArray.push(value);
	    	console.log(valueArray[i]);

		}
	}



});