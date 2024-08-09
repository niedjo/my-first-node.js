const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const dotenv = require("dotenv").config()
const app = express()

const PORT = 5000

// connexion to database

connectDB()

// add the middleware witch will process post data

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use("/post", require("./routes/post.routes"))

// we lounch the server 
app.listen(PORT, () => {
    console.log(`serveur started at port ${PORT}`)
})