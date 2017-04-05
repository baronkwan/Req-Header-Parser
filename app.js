var express = require("express")
var path = require("path")

var app = express()

// Since it is only an API project we do not need any views 
// and only exporting JSON object as a respond.

app.get('/', (req, res) => {
    var ipaddress = req.headers['x-forwarded-for']
    var language = req.headers['accept-language'].split(',')[0]
    var software = req.headers['user-agent'].match(/\(([^()]+?)\)/)[1]
    var clientHeaderInfo = { ipaddress, language, software }
    res.end(JSON.stringify(clientHeaderInfo))
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening to ${process.env.PORT}...`)
})