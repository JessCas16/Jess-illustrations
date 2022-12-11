const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || '3000'


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render("principal")
})

app.listen(port, () => {
    console.log("Escuchando el puerto " + port)
})