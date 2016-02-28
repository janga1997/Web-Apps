$(document).ready(function() {
  var right = 25;

  var seconds = 0;
  var minutes = right;
  var check = true;

  function output() {
    $(".time").html(minutes + ":" + seconds);
  }

  $(".minus-right").on("click", function() {
    if (right >= 2) {
      right--;
      minutes = right;
      $(".value-right").html(right);
      output();
    }
  });

  $(".plus-right").on("click", function() {
    right++;
    minutes = right;
    $(".value-right").html(right);
    output();
  });
  var myVar;
  $("#clock").on("click", function() {
        
if (check === false) {
        check = true;
        dbclick();
      }
else{
  
  check=false;
    myVar = setInterval(function() {

      
      if (minutes === 0 && seconds === 0) {
        stop();
      } else {
        if (seconds === 0) {
          minutes--;
          seconds = 59;
        }

        seconds--;

        output();
      }
    }, 1000);
    
}

  });

  function dbclick() {
    clearInterval(myVar);
  }

  function stop() {
    $("#clock").css("background-color", "red");
    clearInterval(myVar);
    alert("Time Up!");
  }

  $(".reset").on("click", function() {
    right = 25;
    minutes = right;
    seconds = 0;
    $(".value-right").html(right);
    $("#clock").css("background-color", "#B0C4DE");
    clearInterval(myVar);
    output();

  });

});