const myApiKey = `76e6519c1befa7adf8423abca4ae89ab`;
const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoadTemperature(data))

}
const displayLoadTemperature = data => {
 const temperature = document.getElementById('temperature');
 console.log(data.main.temp);
  temperature.innerText =data.main.temp; 

}
loadTemperature('dhaka');