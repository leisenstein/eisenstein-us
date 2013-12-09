$.ajax({
  url: "http://wsf.cdyne.com/WeatherWS/Weather.asmx/GetCityWeatherByZIP",
  data: {
    ZIP: 30047
  },
  success: function( data ) {
    $( "#weather-temp" ).html( "<strong>" + data + "</strong> degrees" );
  }
});

/* http://locator.aids.gov/data?zip=30047 */


