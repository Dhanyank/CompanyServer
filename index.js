const express = require('express')
const app=express()
app.listen(3000, () => {
    console.log("Server started at 3000")
})
const dataService=require('./services/data.service')
const cors = require('cors')


app.use(cors({
    origin: 'http://localhost:4200'
}))


app.post('/save', (req, res) => {
    // asynchronous
    dataService.save(req.body.cname, req.body.pid, req.body.adrs,req.body.web,req.body.features,req.body.subfeatures,req.body.addinput)
        .then(result => {
            res.status(result.statusCode).json(result)
        })

})