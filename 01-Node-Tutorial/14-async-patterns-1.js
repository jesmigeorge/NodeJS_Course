// Blocking refers to operations that block further execution 
// until that operation finishes while non-blocking refers to 
// code that doesn't block execution. Or as Node. js docs puts 
// it, blocking is when the execution of additional JavaScript 
// in the Node. js process must wait until a non-JavaScript operation completes.

// when one person executes a blocking code then the other
// users are also blocked due to synchronous nature.So always make the
// code asynchronous cuz the blocking code is OFFLOADED and only when 
// the data is ready, then we invoke it and that way we're not blocking 
// other uses.
const http = require('http')
const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.end('Home Page')
    }
    else if (req.url === '/about')
    {
        // BLOCKING CODE !!!
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} : ${j}`)
            }
        }
        ///
        res.end('About Page')
    }
    else{
        res.end('Error Page')
    }
})

server.listen(5000, ()=>{
    console.log("Listening on port 5000")
})

