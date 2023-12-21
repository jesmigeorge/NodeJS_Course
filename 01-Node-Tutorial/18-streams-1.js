// streams - used to read/write data sequentially
// 4 types - writeable, readeable, duplex, transform
const { createReadStream } = require('fs')
const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    encoding: 'utf8'
})

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => console.log(err))