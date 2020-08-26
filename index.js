// Import packages
const express = require('express')
const morgan = require('morgan')
// App
const app = express()
// Morgan
app.use(morgan('tiny'))
// First route
app.get('/', (req, res) => {
    res.json({ 
        id: 1,
        message: 'Hello world' })
})
// Starting server
app.listen('1337')