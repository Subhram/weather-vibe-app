// Replace with your actual OpenWeatherMap API key
const API_KEY = '279ed5234086a7b6942a2254b5aaf023'; 

// DOM Elements
const citySelect = document.getElementById('city-select');
const weatherCard = document.getElementById('weather-card');
const errorMessage = document.getElementById('error-message');
const cityNameEl = document.getElementById('city-name');
const temperatureEl = document.getElementById('temperature');
const descriptionEl = document.getElementById('description');
const weatherIconEl = document.getElementById('weather-icon');

// Event Listener for the dropdown
citySelect.addEventListener('change', async (e) => {
    const city = e.target.value;
    if (!city) return;

    await fetchWeather(city);
});

// Fetch weather data
async function fetchWeather(city) {
    // Hide UI elements while fetching
    weatherCard.classList.add('hidden');
    errorMessage.classList.add('hidden');

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error('City not found or API key invalid');
        }

        const data = await response.json();
        updateUI(data);

    } catch (error) {
        showError(error.message);
    }
}

// Update the DOM with fetched data
function updateUI(data) {
    cityNameEl.textContent = data.name;
    // Round the temperature to the nearest whole number
    temperatureEl.textContent = Math.round(data.main.temp); 
    descriptionEl.textContent = data.weather[0].description;
    
    // Get the corresponding weather icon from OpenWeatherMap
    const iconCode = data.weather[0].icon;
    weatherIconEl.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    // Show the weather card
    weatherCard.classList.remove('hidden');
}

// Display error messages
function showError(message) {
    errorMessage.textContent = 'Error: Please make sure you added a valid API key in script.js.';
    errorMessage.classList.remove('hidden');
    console.error(message);
}
