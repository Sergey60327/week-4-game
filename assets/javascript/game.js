$(document).ready(function(){

var Random=Math.floor(Math.random()*100+19)

$('#value').text(Random);

  var one= Math.floor(Math.random()*11+1)
  var two= Math.floor(Math.random()*11+1)
  var three= Math.floor(Math.random()*11+1)
  var four= Math.floor(Math.random()*11+1)

  var total = 0;
  var wins= 0;
  var losses = 0;

  $('#win').text(wins);
  $('#loss').text(losses);

  function reset() {
  	Random=Math.floor(Math.random()*101+19);
  	console.log(Random);
  	$('#value').text(Random);
   one= Math.floor(Math.random()*11+1);
   two= Math.floor(Math.random()*11+1);
   three= Math.floor(Math.random()*11+1);
   four= Math.floor(Math.random()*11+1);

  total = 0;
  $('#yourScore').text(total);
  }

  function winner() {
  	$('#update').text('You Won!');
  	wins++;
  	$('#win').text(wins);
  	reset();
  }

  function loser() {
  	$('#update').text('You lose!');
  	losses++;
  	$('#loss').text(losses);
  	reset();
  }


  $('#red').on("click", function() {
   total = total+ one;
   console.log ("New Total=" + total);
   $('#yourScore').text(total);

   if (total == Random) {
       winner();
    }
    else if(total > Random) {
       loser();
    }
   
})
  $('#blue').on ('click', function(){
    total = total + two;
    console.log("New Total= " + total);
    $('#yourScore').text(total); 
        
        if (total == Random){
          winner();
        }
        else if ( total > Random){
          loser();
        } 
  })  
  $('#yellow').on ('click', function(){
     total = total + three;
    console.log("New total= " + total);
    $('#yourScore').text(total);
     
       if (total == Random){
          winner();
        }
        else if ( total > Random){
          loser();
        } 
          
  })  
  $('#green').on ('click', function(){
     total = total + four;
    console.log("New total= " + total);
    $('#yourScore').text(total);
     
       if (total == Random){
          winner();
        }
        else if ( total > Random){
          loser();
        } 
  });   
}); 


