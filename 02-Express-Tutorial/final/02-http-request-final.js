const http = require('http')
const { readFileSync } = require('fs')
//get all the files
// we're not invoking this every time someone comes to the server, rather when 
// we instantiate the server, we have those files in hand when the request comes in.
const homePage = readFileSync('./navbar-app/index.html')
// inorder to access the external links in that homepage as well otherwise images,css won't load
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')
const server = http.createServer((req,res) =>{
    // console.log(req.method)
    const url = req.url
    console.log(url)
    const body = 'Hello World'
    if (url === '/'){
        // 'Content-Length': Buffer.byteLength(body)  - writes only text of this length to the browser
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write(homePage)
        res.end("Let's Learn Node")
    }
    else if (url === '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("Its all about Node here !!!")
        res.end()
    }
    // styles
    else if (url === '/styles.css'){
        res.writeHead(200, {'Content-Type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    // logo
    else if (url === '/logo.svg'){
        res.writeHead(200, { 'Content-Type': 'text/svg+xml'})
        res.write(homeImage)
        res.end()

    }
    // js
    else if ( url === '/browser-app.js'){
        res.writeHead(200, { 'Content-Type': 'text/javascript' })
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain'})
        res.write('404 Not Found - Invalid Http Request')
        res.end()
    }
})

server.listen(5000)

