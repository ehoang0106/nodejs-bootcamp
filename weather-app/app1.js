
const request = require('postman-request');

const API = '82ce116fef7461f1900a7fcde78ad5d1';

const geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=Orange,CA,1&appid=82ce116fef7461f1900a7fcde78ad5d1';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=33.7872568&lon=-117.850308&units=imperial&appid=82ce116fef7461f1900a7fcde78ad5d1';

const getGeo = () => {
    request({url: geoUrl, json: true}, (error, response) => {
        const data = response.body[0];
        const lat = data.lat;
        const lon = data.lon;    
        
        
        console.log(lat);
        console.log(lon);
    })
}


const getWeatherData = () => {
    request({url: weatherUrl, json: true}, (error, response) => {
        const data = response.body;
        const weatherMain = data.weather[0].main;
        const weatherDescription = data.weather[0].description;
        const currentTemp = data.main.temp;
        const tempMin = data.main.temp_min;
        const tempMax = data.main.temp_max;
        const location = data.name;
        
        console.log('Weather in ' + location + ':');
        console.log(weatherMain + ' - ' + weatherDescription);
        console.log('Current Tempature: ' + currentTemp);
        console.log('Maximum Tempature: ' + tempMax + '\n' + 'Minimum Tempature: ' + tempMin);
        
    })
};

getWeatherData();

