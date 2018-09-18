//Access geolocation data
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var locationURL = "https://fcc-weather-api.glitch.me/api/current?lon=" + longitude + "&lat=" + latitude

//API call
$.ajax({
  url: locationURL,
  type: 'GET',
  dataType: 'json',
  success(response) {
    document.getElementById("location").innerHTML = response.name + ', ' + response.sys.country;

//find celsius and fahrenheit
  var tempCelsius = Math.round(response.main.temp);
  var tempFahrenheit = Math.round(response.main.temp * 9 / 5 + 32);

//send variables to html
  document.getElementById("celsius").innerHTML = tempCelsius + "°C";
  document.getElementById("fahrenheit").innerHTML = tempFahrenheit + "°F";
  document.getElementById("weather").innerHTML = response.weather[0].main;

//create toggle button
  $("button").click(function() {
    $("h4").toggle();
});

//error handling
  },
  error(jqXHR, status, errorThrown) {
  	console.log(jqXHR);
}
});
  });
}
