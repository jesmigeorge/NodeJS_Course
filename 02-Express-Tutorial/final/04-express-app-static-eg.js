const express = require('express')
const app = express()
const path = require('path')

// app.use() = sets up static files such as css,js,img files and middleware
// so we don't have the complex code like in http module server. Just put the
// static files in public/assets/static folder. we can directly import 1000s 
// of static files in that folder.
app.use(express.static('./public'))


// OPTION 1 - to send back or render index.html files
// app.get('/', (req,res) =>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

// OPTION 2 - adding to static assets
// OPTION 3 - SSR(Server Side Rendering)

app.get('*', (req,res) => {
    res.send('<h1>Resource not found</h1>')
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})