const express = require('express')
const app = express()
const path = require('path')

// setup static and middleware
app.use(express.static('./Files'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./Files/index.html'))
//     // adding to static assets
//     // SSR
// })

app.listen(5000,()=>{
    console.log('server listening on port 5000...');
})