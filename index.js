const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const mailService = require('./services/mailService')
require('dotenv').config();


const PORT = process.env.PORT || 9991
const app = express()


app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({ message: "running" })
})


app.post("/get-visitor-email", (req, res) => {
    const content = req

    console.log(mailService.sendEmailToMyself(req.body.name, req.body.email, req.body.subject, req.body.message))


    res.status(200).json({ message: "running" })
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})
