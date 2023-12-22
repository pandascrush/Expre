const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('Request Server');
    res.end("Hello Wolrd")
})

server.listen(5000,()=>{
    console.log('Server listening on port is 5000......')
})