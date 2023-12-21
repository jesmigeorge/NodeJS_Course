// event loop - registers the time consuming callback and only when the event is complete 
// it executes the callback.ie , we run our immediate call first and then
// only when we have time we can execute the time consuming callback.ie OFFLOAD our time
// consuming application.
const { readFile, writeFile } = require('fs')
console.log('started a first task')
readFile('./content/first.txt','utf8',(err, result) => {
    if (err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')
