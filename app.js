var express = require('express')
var app = express()
var main = require('./controller/main')

var port = process.env.PORT || 8080;

app.use(express.static('public'))
app.set('view engine', 'ejs') //Setting EJS as default view Engine
app.set('views', (__dirname + '/views')) //Setting default folder to check the EJS files


app.get('/', (req, res) => {
    res.render('index', {
        value: 'Weather App',
        result: null,
        form: 'formData.ejs',
        butt: false
    })
})

app.get('/location', (req, res) => {

    main.fetchData(req.query.location, function () {
        //console.log(main.dispData())
        res.render('index', {
            result: main.dispData(),
            form: 'null',
            value: null,
            butt: true

        })
    });


})

app.listen(port, () => {
    console.log(`Port open on ${port}`)
})