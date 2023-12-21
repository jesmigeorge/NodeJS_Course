const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data - did not understand this properly
// diff between queerystring and qs library
// refer - https://velog.io/@omago123/qs-library-vs-querystring-library#:~:text=qs%20library%20allows%20you%20to,object%20from%20your%20query%20string.
app.use(express.urlencoded({ extended: false }))
// parse json 
app.use(express.json())

app.use('/api/people',people)
app.use('/login',auth)
app.listen(5000, ()=>{
    console.log("Server is listening to port 5000...")
})

// 400 -POST unsuccessful
// 401 - Unauthorised access
// 404 - not found record
// 201 - POST successful
// 200 - Authorized Access