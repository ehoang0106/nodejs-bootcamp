const request = require('postman-request')
const API = '82ce116fef7461f1900a7fcde78ad5d1'
const url = 'http://api.weatherstack.com/current?access_key=f416a51140952488e7a617887f8b1b92&query=92840&units=f'


//convert Kelvin to Fahrenheit
const fahrenheit = (k) => Math.floor((k-273.15)*9/5+32);

//convert Celsius to Fahrenheit

const f = (c) => Math.floor((c) * 9/5) + 32;



request({url: url, json: true}, (error, response) => {
    const data = response.body;
    
    const cityName = data.location.name;
    const region = data.location.region;
    const localTime = data.location.localtime;
    
    const currentTemp = data.current.temperature;
    const weatherDescription = data.current.weather_descriptions
    
    console.log('Region: ' + region);
    console.log('Location: ' + cityName);
    console.log('Local time: ' + localTime);
    console.log('Current Temperature: ' + currentTemp + '°F - ' + weatherDescription);

    

})
