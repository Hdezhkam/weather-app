const geocode = require('./utiles/geocode');
const forecast = require('./utiles/forecast');


const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longtutde, location }) => {
        if (error) {
            return console.log(error);
        }
        forecast(latitude, longtutde, (error, forecastdata) => {
            if (error) {
                return console.log(error);
            }
            console.log(`${location} : ${forecastdata}`)
        })
    })

}

