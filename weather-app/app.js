const request = require('postman-request')
const geocode = require('./geocode')

const weatherData = (lat, lon, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon='+ lon +'&units=imperial&appid=82ce116fef7461f1900a7fcde78ad5d1'

    request({url: url, json: true}, (error, response) => {
        const data = response.body;
        callback(undefined, {
            location: data.name,
            weather: data.weather[0].main,
            description: data.weather[0].description,
            tempature: data.main.temp
        });
    });
};




geocode('Orange', 'CA', (error, data) => {
    console.log(data);
    
    weatherData(data.latitude, data.longtitude, (error, data) => {
        console.log(data);
    })

})



// weatherData('33.7872568', '-117.850308', (error, data) => {
//     console.log(data);
// })
