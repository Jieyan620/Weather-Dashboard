
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


function daysWeathercard() {

  document.getElementById('v-pills-tabContent').innerHTML = `
  
  <div> aaaa</div>
  
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

    } else if (target.id === 'Austin') {

      cityName = 'Austin'
      fetchDaysWeather(cityName)

    } else if (target.id === 'Chicago') {

      cityName = 'Chicago'

    } else if (target.id === 'Newyork') {

      cityName = 'New York'

    } else if (target.id === 'Orlando') {

      cityName = 'Orlando'

    } else if (target.id === 'Sanfrancisco') {

      cityName = 'San Francisco'

    } else if (target.id === 'Seattle') {

      cityName = 'Seattle'

    } else if (target.id === 'Denver') {

      cityName = 'Denver'

    } else if (target.id === 'Atlanta') {

      cityName = 'Atlanta'

    }
  })
}

eventlistener()