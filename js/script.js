const myApiKey = `76e6519c1befa7adf8423abca4ae89ab`;
const loadTemperature = city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`
  fetch(url)
    .then(res => res.json())
    .then(data => displayLoadTemperature(data))

}
const displayLoadTemperature = data => {
  //  const temperature = document.getElementById('temperature');
  //  console.log(data.main.temp);
  setInnerTextById('temperature', data.main.temp);
  setInnerTextById('condition',data.weather[0].main);
  // temperature.innerText = data.main.temp;
  console.log(data.weather[0].main);

}

const setInnerTextById = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
}
document.getElementById('search-btn').addEventListener('click', function () {
  const searchField = document.getElementById('search-field');
  const city = searchField.value;
  // set city 
  document.getElementById('city').innerText = city;
  loadTemperature(city);
})

loadTemperature('dhaka');