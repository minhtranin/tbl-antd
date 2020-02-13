var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())


app.listen(8303, function () {
  console.log('CORS-enabled web server listening on port 8303')
})
app.get('/',cors(),(req,res)=>{
    const data = [{
        name: "minh",
        old: "13",
        phone: "23123123",
        address: "1232131adsda"
    },
    {
        name: "minh2",
        old: "13",
        phone: "23123123",
        address: "1232131adsda"
    },
    {
        name: "minh2.5",
        old: "13",
        phone: "23123123",
        address: "1232131adsda"
    },
    {
        name: "minh3",
        old: "13",
        phone: "23123123",
        address: "1232131adsda"
    },
    {
        name: "minh4",
        old: "13",
        phone: "23123123",
        address: "1232131adsda"
    }
    ]
    return res.send(data);
})
