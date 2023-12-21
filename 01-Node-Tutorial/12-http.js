const http = require('http')
// creates a http server that listens to port 5000
// user property for knowing which port/endpoint the client is requesting 
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('Welcome to home page')
    }
    else if (req.url === '/about'){
        res.end('Here is our short history')
    }
    else{
        res.end(`
            <h1>Oops !!</h2>
            <p>We are sorry but ${req.url} doesn't exist.</p>
            <a href="/">Back Home</a>
        `)
    }
})

server.listen(5000)