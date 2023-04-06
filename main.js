const express = require('express')

const app = express()
app.get('/vi/health',()=>{
    return '365ms'
})
app.listen(8080,()=>{
    console.log('hi')
})
