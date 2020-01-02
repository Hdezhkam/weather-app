const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiaGRlemhrYW0iLCJhIjoiY2s0dGI4ZnB2NHU1ODNsbzY0NDMycXVzeCJ9.1Ly3humFYA3JNMlcx4mTFQ`

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, Try another search', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.features[0].geometry.coordinates[1],
                longtutde: response.body.features[0].geometry.coordinates[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
