// npm i --save-dev nodemon , npm run start
const http = require('http')
const server = http.createServer((req,res) =>{
    console.log(req.method)
    const url = req.url
    const body = 'Hello World'
    if (url === '/'){
        // 'Content-Length': Buffer.byteLength(body)  - writes only text of this length to the browser
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write(`<h1>${body}</h1>`)
        res.end("Let's Learn Node")
    }
    else if (url === '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("Its all about Node here !!!")
        res.end()
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain'})
        res.write('404 Not Found - Invalid Http Request')
        res.end()
    }
})

server.listen(5000)