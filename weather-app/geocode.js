const request = require('postman-request');

const geocode = (city, state, callback) => {
    const url = 'http://api.openweathermap.org/geo/1.0/direct?q='+ encodeURIComponent(city) +','+ state +',1&appid=82ce116fef7461f1900a7fcde78ad5d1';

    request({url: url, json: true}, (error, response) => {
        const data = response.body[0];
        callback(undefined, {
            latitude: data.lat,
            longtitude: data.lon,
            city: data.name,
            state: data.state,
            country: data.country
        });
    });
};


module.exports = geocode;