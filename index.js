const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(express.json())


// Routers here

const authenticationRoutes = require('./routes/auth')

const postRoutes = require('./routes/post')

// mongoose connection here

mongoose.connect(process.env.MONGO_URL_DB, {})
    .then( ()=> {
        console.log('DATABASE CONNECTED, SERVER IS RUNNING')
    })
    .catch((error) =>{
        console.log(error)
    })


app.use(authenticationRoutes)
app.use(postRoutes)



app.listen(process.env.PORT, () =>{
    console.log('Server Running on localhost 8000');
})