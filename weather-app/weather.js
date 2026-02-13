
const tempField = document.querySelector('.temp');
const cityField = document.querySelector('.city');
const localTimeField = document.querySelector('.localtime');
const conditionIconField = document.querySelector('.weather_condition img');
const conditionField = document.querySelector('.weather_condition p');
const searchField = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchForm button');

async function fetchWeatherData(city){
    try{
        const url = `https://api.weatherapi.com/v1/current.json?key=1f22c3f139544c00844191808261202&q=${city}&aqi=yes`;
        const response = await fetch(url);
        if(!response.ok){
            alert("Unable to fetch response. Please try later or enter a different city name");
        }
        const data = await response.json();
        console.log(data);
        updateDom(data);
    } catch(error){
        console.error(error.message);
    }
}

function updateDom(data){
    const {location, current} = data;
    tempField.textContent = `${current.temp_c}°C`;
    cityField.textContent = location.name;
    localTimeField.textContent = formatLocalTime(location.localtime);
    conditionIconField.setAttribute("src", `https://${current.condition.icon}`);
    conditionField.textContent = current.condition.text;
}

function formatLocalTime(localtime){
    const [date, time] = localtime.split(" ");
    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return `${time} ${dayArray[new Date(date).getDay()]}, ${date}`;
}

searchButton.addEventListener('click', function(event){
    event.preventDefault();
    let city = searchField.value.trim();
    if(!city || city === null){
        alert("Please enter a valid city name");
    }
    fetchWeatherData(city);
    searchField.value = "";
})

// fetchWeatherData('Pune');