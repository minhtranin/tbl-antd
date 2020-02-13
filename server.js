const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')
app.use(cors())


app.listen(8303, function () {
  console.log('CORS-enabled web server listening on port 8303')
})

// get
app.get('/',cors(),(req,res)=>{
    const data = fs.readFileSync('./db.json','utf8');
    const response = JSON.parse(data);
    return res.send(response);
})
// create
app.get('/create',cors(), (req,res)=>{
    // const name = req.query.name;
    // const old = req.query.old;
    // const phone = req.query.phone;
    // const address =req.query.address;
    // const db = {name,old,phone,address};
    // console.log(db);
    // const data = JSON.stringify(db);
    // fs.writeFileSync('./db.json',data);
    // return res.send(db);
    const data = fs.readFileSync('./db.json','utf8');
    const response = JSON.parse(data);
    response.push(req.query);
    const trans = JSON.stringify(response);
    fs.writeFileSync('./db.json',trans);
    return res.send(req.query)
})
