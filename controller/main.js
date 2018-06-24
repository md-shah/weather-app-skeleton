var request = require('request')
var dataString

//Function to get data from OpenWeatherAPI and format it to json

let fetchData = (locVal, callback) => {
    var key = '1e957e437a7e1946f9bdfb6d84721730'
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${locVal}&appid=${key}&units=metric`

    request({
        url
    }, (error, response, body) => {

        if (error) {
            dataString = 'Check your connection'
            callback()
        } else {
            var weatherData = JSON.parse(body)
            if (weatherData.cod === '404') {
                dataString = 'Please input a correct location'
            } else {
                dataString = `Its ${weatherData.weather[0].main} in ${locVal} & the temp is ${weatherData.main.temp}°`
            }
            //CallBack function to avoid calling display result function before getting the result back from API
        }

        callback();

    });

}

// Function to display data from above function to user.

let dispData = () => {
    return dataString
}

//Exporting functions and a global variable
module.exports = {
    dataString,
    fetchData,
    dispData
}