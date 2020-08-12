
var cityName = ''


function fetchCurrentWeather(cityName) {

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&cnt=5&APPID=0e4bf76db5951d3484682cd293e558ec`)
    .then(r => r.json())
    .then(weatherC => {
      console.log(weatherC)






    })
    .catch(e => console.error(e))
}

function currentWeathercard(params) {
  
}

// examlpe ~~~~~~
// api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=5&appid=0e4bf76db5951d3484682cd293e558ec
// https://api.openweathermap.org/data/2.5/weather?q=${cityName}&cnt=5&APPID=0e4bf76db5951d3484682cd293e558ec
// ~~~~~

function fetchDaysWeather(cityName) {

  fetch(`https://api.weatherbit.io/v2.0/forecast/energy?city=${cityName}&threshold=63&units=I&key=f06f2e60399a4a83930a4bd58ee1e53e&daily=`)
    .then(r => r.json())
    .then(weatherD => {
      console.log(weatherD)




    })
    .catch(e => console.error(e))
}

function daysWeathercard(params) {
  
}

// examlpe ~~~~~~
// https://api.weatherbit.io/v2.0/forecast/energy?city=${cityName}&threshold=63&units=I&key=f06f2e60399a4a83930a4bd58ee1e53e&daily=
// https://api.weatherbit.io/v2.0/forecast/hourly?city=${cityName}&key=f06f2e60399a4a83930a4bd58ee1e53e&daily=
// ~~~~~



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
      document.getElementById('searchInput').value=''
      console.log(cityName)

    } else if (target.id === 'Austin') {

      cityName='Austin'

    } else if (target.id === 'Chicago') {

      cityName='Chicago'

    } else if (target.id === 'Newyork') {

      cityName='New York'

    } else if (target.id === 'Orlando') {

      cityName='Orlando'

    } else if (target.id === 'Sanfrancisco') {

      cityName='San Francisco'

    } else if (target.id === 'Seattle') {

      cityName='Seattle'

    } else if (target.id === 'Denver') {

      cityName='Denver'

    } else if (target.id === 'Atlanta') {

      cityName='Atlanta'

    }
  })
}

eventlistener()