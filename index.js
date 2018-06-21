var express = require('express')
var app = express()
var Promise = require('promise')
var main = require('./controller/main')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.get('/location', (req, res) => {

    main.fetchData(req.query.location, function(){
        console.log( main.dispData())
        res.send(`<h1>${main.dispData()}</h1>`)
    });

})


app.listen(8080, function () {
    console.log('Running on port 8080')
    console.log('iugfksjbf.sdnf')
})