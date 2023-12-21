const http = require('http')
const fs = require('fs')
// used to read very large sized dat in chunks for efficiency 
http.createServer((req,res) => {
    const fileStream = fs.createReadStream('./content/big.txt','utf8')
    fileStream.on('open', ()=>{
        fileStream.pipe(res)  // data read in chunks is written also in chunks
    })
    fileStream.on('error', (err)=>{
        res.end(err)
    })
}).listen(5000)