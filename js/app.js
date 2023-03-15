const API_KEY = '46ad7457603b9b0104e633e78cd60e16';
const loadCity = city_name => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => displayTemp(data))
};

const displayTemp = temp => {
    const cityName = document.getElementById('city-name').innerText = temp.name;
    const temperature = document.getElementById('temp').innerText = temp.main.temp;
    const condition = document.getElementById('condition').innerText = temp.weather[0].main;

    console.log(temp)
};
const searchWeather = () => {
    const searchField = document.getElementById('search-field');
    const getWeather = searchField.value;
    searchField.value = '';
    loadCity(getWeather);
}
document.getElementById('search-btn').addEventListener('click', function () {
    searchWeather()
});

document.getElementById('search-field').addEventListener('keypress', function (event) {
    const value = event.key;
    if (value === 'Enter') {
        searchWeather();

    }
})
loadCity('dhaka')