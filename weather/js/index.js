$(document).ready(function() {
  

function titleCase(str) {
  var test=str.split(" ");
  
  for(var i=0;i<test.length;i++){
    var dummy=test[i].split("");
    dummy[0]=dummy[0].toUpperCase();
      for(var k=1;k<dummy.length;k++){
        dummy[k]=dummy[k].toLowerCase();
      }
    test[i]=dummy.join("");
  }
  
  return test.join(" ");
}
  function fah(value){
    return (9/5)*value+32;
  }



  var latitude;
  var longitude;
  var key = "ed41fbf41981d8f8198d5f8469c41844";
  var url;

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + key +"&units=metric";

      $.getJSON(url, function(json) {

        $(".city-text").html(json.name);
        
        $(".weather-text").html(titleCase(json.weather[0].description));

        $(".wind-text").html("Wind : " + json.wind.speed+" knots");
        $(".temp").html(json.main.temp+	"	&deg;C");
         $(".icon").html("<img style='height:160px'' src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'> ");
        
        
        
        $(".cel").on("click", function(){
      $(".temp").html(json.main.temp+	"	&deg;C");
});
        
        $(".fah").on("click", function(){
 $(".temp").html(Math.round(fah(json.main.temp)*100)/100 +	"	&deg;F");
});
        
       
      });
    });

  }

});