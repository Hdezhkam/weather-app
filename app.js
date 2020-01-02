const geocode = require('./utiles/geocode');
const forecast = require('./utiles/forecast');


const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error);
        }
        forecast(data.latitude, data.longtutde, (error, forecastdata) => {
            if (error) {
                return console.log(error);
            }
            console.log(`${data.location} : ${forecastdata}`)
        })
    })

}

