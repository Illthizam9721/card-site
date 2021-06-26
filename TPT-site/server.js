// modules
const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')
const config = require('dotenv')


// config
const app = express()
const port = 8000
const host = '0.0.0.0'

// middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

// endpoints
app.get('/', (req, res) => {
    return res.status(200).send('Endpoint works.')
})

app.post('/api/send/message', async (req, res) => {

    const {email, name, message} = req.body

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tpt.testhdhd@gmail.com',
            pass: 'olegthebest'
        }
    })

    const mailOptions = {
        from: email,
        to: 'tpt.testhdhd@gmail.com',
        subject: `Message from ${email}`,
        text: `User with email ${email} sent a request. You have to respond it.`
    }


    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error)
            res.status(500).send('error')

            if(email.length < 1) {
                return res.status(500).send('Email is required.')
            }

        } else {
            console.log(info.response)
            res.status(200).send('success')
        }
    })
})

// listener
app.listen(8000, () => console.log(`Server has been started on localhost 8000...`))
