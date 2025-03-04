const weatherForm = document.getElementById('weather-form');
const cityInput = document.getElementById('city');
const submitBtn = document.getElementById('submit-btn');
const weatherDataDiv = document.getElementById('weather-data');

const API_KEY = '79963f238ef69446f87bef50109ff6c8';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                const weatherData = `
                    <h2>${data.name}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                weatherDataDiv.innerHTML = weatherData;
            })
            .catch((error) => console.error(error));
    }
});
