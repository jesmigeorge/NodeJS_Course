const http = require('http')
const server = http.createServer()
// Using Event Emitter Api
server.on('request', (req, res) => {
    res.end('Welcome')
})
// emits request event
// subscribe to it / listen for it / respond to it
server.listen(5000, () =>{
    console.log('listening on port 5000...')
})