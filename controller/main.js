var request = require('request')
var dataString
let fetchData = (locVal,callback) => {
    var key = '1e957e437a7e1946f9bdfb6d84721730'
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${locVal}&appid=${key}&units=metric`

    request({
        url
    }, (error, response, body) => {
        
        if (error) {
            console.log(error)
        } else {

            console.log(body)
            var weatherData = JSON.parse(body)
            dataString = `Its ${weatherData.weather[0].main} in ${locVal} & the temp is ${weatherData.main.temp}`
            console.log(dataString)
            console.log('call from fetchdata')
            //console.log(dataString)
            // dispData(dataString)
        }
        callback();
        
    });
   
    // console.log('call from dispdata')
}


let dispData = () => {
    
    
    
    console.log(dataString)
    console.log('call from dispdata')
    return dataString
}


module.exports = {
    dataString,
    fetchData,
    dispData
}