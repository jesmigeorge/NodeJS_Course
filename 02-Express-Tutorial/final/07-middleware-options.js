// req => middleware => res
const express = require('express')
const app = express()
const morgan = require('morgan')
const middleware = require('./middleware.js')
const authorize = require('./authorize')

//app.use('/api',middleware)  // position of this matters
// in this path api/home/about/products anything after api can 
// give output to console even though that path doesn't exist.
//app.use([authorize, middleware]) //- the order of the functions matter in console - 1. our own middleware
// app.use(express.static('./public'))        2.express inbuilt middleware
app.use(morgan('tiny'))  // 3.Third party software

app.get('/', (req,res)=>{  
    res.send('Home Page')         
})

// app.use(middleware) - if this statement is used here,this 
// middleware function applies only to the GET requests below it.
// That is why when we put app.use() here home page route won't 
// print anything in the console.
app.get('/about', (req, res)=>{
    res.send('About page')
})

app.get('/api/products', (req, res) =>{
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    console.log(req.user) // works for link : http://localhost:5000/api/items?user=jesmi
    res.send('Items')
})

app.listen(5000,()=>{
    console.log('server listening at port 5000...')
})