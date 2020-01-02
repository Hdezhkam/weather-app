const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = `https://api.darksky.net/forecast/6a63c81abd336d14f6826b7b918c2487/${encodeURIComponent(lat)},${encodeURIComponent(lon)}?units=auto`

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `${response.body.daily.data[0].summary} It's currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`);
        }
    })
}


module.exports = forecast