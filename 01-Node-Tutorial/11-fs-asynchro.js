const { readFile, writeFile } = require('fs'); // fs- file system
// callback hell - refactored in 15-async-await.js
readFile('./content/first.txt','utf8', (err, result)=>{
    if (err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8', (err, result)=>{
        if (err){
            console.log(err);
            return
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}  ${second}`,
            (err, result)=>{
                if (err){
                    console.log(err);
                    return
                }
                console.log(result);
            }
        )
    });
});


