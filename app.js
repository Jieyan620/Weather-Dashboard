
var cityName = ''

function fetchDaysWeather(cityName) {
  fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=f06f2e60399a4a83930a4bd58ee1e53e&daily=`)
    .then(r => r.json())
    .then(weatherD => {
      console.log(weatherD)
      var data = weatherD.data
      console.log(data)

      daysWeathercard(weatherD)
    })
    .catch(e => console.error(e))
}


function daysWeathercard(weatherD) {

  document.getElementById('cContent').innerHTML = `
  <div class="card" style="width: 18rem;">
   <div class="card-header">
    <h3>Today</h3>
   </div>
   <div class="card-body">
     <div class= "location">
      <h5 class="card-title">${weatherD.city_name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${weatherD.country_code}</h6>
     </div>
     <div class="image">
      <img src="icons/${weatherD.data[0].weather.icon}.png">
     </div>
     <p class="card-text">
      Temperature: ${weatherD.data[0].max_temp}℃ ~~ ${weatherD.data[0].min_temp}℃
     </p>
     <p class="card-text">
      Feels like: ${weatherD.data[0].app_max_temp}℃ ~~ ${weatherD.data[0].app_min_temp}℃
     </p>
     <p class="card-text">
      Humidity: ${weatherD.data[0].rh}%
     </p>
     <p class="card-text">
      Wind speed: ${weatherD.data[0].wind_spd}m/s
     </p>
     <p class="card-text">
      UV index: ${weatherD.data[0].uv}+
     </p>
   </div>
  </div>
  `
}

function get5daysData() {





}

function 5daysWeathercard() {
  
  document.getElementById('fContent').innerHTML = `
  
  
  `

}


//Gets citiName from search bar
function getKeywords() {
  cityName = document.getElementById('searchInput').value
  cityName = cityName.replace(/\s+/g, '+')
  return cityName
}


function eventlistener() {
  document.addEventListener('click', ({ target }) => {
    if (target.id === 'searchBtn') {

      event.preventDefault()
      getKeywords()
      document.getElementById('searchInput').value = ''
      console.log(cityName)
      fetchDaysWeather(cityName)

    } else if (target.id === 'Austin') {

      cityName = 'Austin'
      fetchDaysWeather(cityName)

    } else if (target.id === 'Chicago') {

      cityName = 'Chicago'
      fetchDaysWeather(cityName)
    } else if (target.id === 'Newyork') {

      cityName = 'New York'
      fetchDaysWeather(cityName)
    } else if (target.id === 'Orlando') {

      cityName = 'Orlando'
      fetchDaysWeather(cityName)
    } else if (target.id === 'Sanfrancisco') {

      cityName = 'San Francisco'
      fetchDaysWeather(cityName)
    } else if (target.id === 'Seattle') {

      cityName = 'Seattle'
      fetchDaysWeather(cityName)
    } else if (target.id === 'Denver') {

      cityName = 'Denver'
      fetchDaysWeather(cityName)
    } else if (target.id === 'Atlanta') {

      cityName = 'Atlanta'
      fetchDaysWeather(cityName)
    }
  })
}

eventlistener()