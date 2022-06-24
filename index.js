const express = require('express')

const app = express()

app.get('/',(req,req) => {
    res.send('hello world')
})

app.get('/callback',(req,req) => {
    res.send('it should have worked!')
})

app.listen(3000,() => {
    console.log('we are running on port')
})