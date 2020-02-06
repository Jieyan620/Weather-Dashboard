// var city='textInput'

fetch('http://api.weatherapi.com/v1/forecast.json?key=273dbb7c440b4d6ebf061607200602&q=07112&days=7')
  .then(r => r.json())
  .then(weather=>{
    console.log(weather)
    document.getElementById('currentCard').innerHTML = `
    <h1>${weather.location.name},${weather.location.region}</h1>
    <h3>Localtime: ${weather.location.localtime}<h3>
    <h3>Temperature: ${weather.current.temp_f}ºF<h3>
    <h3>Humidity: ${weather.current.humidity}<h3>
    <h3>Wind speed: ${weather.current.wind_mph}MPH<h3>
    <h3>UV: ${weather.current.uv}<h3>
    `
    document.getElementById('fiveCard').innerHTML = `
    <h2>5-Day Forecast</h2>

    
    <div>
    <h3> ${weather.forecast.forecastday[0].date}<h3>
    <img src="${weather.forecast.forecastday[0].day.condition.icon.url}">
    <h3>Max Temperature: ${weather.forecast.forecastday[0].day.maxtemp_f}ºF<h3>
    <h3>Min Temperature: ${weather.forecast.forecastday[0].day.mintemp_f}ºF<h3>
    <h3>Humidity: ${weather.forecast.forecastday[0].day.avghumidity}<h3>
    <div>
    `
  }
)
  .catch(e => console.error(e))
