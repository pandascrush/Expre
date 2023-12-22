const http = require('http')

const server = http.createServer((req, res) => {
    // res.write("Welcome to our page")
    // res.end()
    if(req.url === '/'){
        res.end("Welcome to our Home page")
    }
    if(req.url === '/about'){
        res.end("Welcome to About Page")
    }
    // res.write("Welcome to our page")
    res.end(`
    <h1>Begin</h1>
    <p>We had a Problem</p>
    <a href="/"> Back Home</a>
    `)
})

server.listen(5000)