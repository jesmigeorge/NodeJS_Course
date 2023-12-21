const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data - did not understand this properly
// diff between queerystring and qs library
// refer - https://velog.io/@omago123/qs-library-vs-querystring-library#:~:text=qs%20library%20allows%20you%20to,object%20from%20your%20query%20string.
app.use(express.urlencoded({ extended: false }))
// parse json 
app.use(express.json())

app.post('/login', (req, res)=>{
    // console.log(req.body)
    const { name } = req.name
    if (name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Unauthorized Access ! Please provide credentials')
})

// GET METHOD
app.get('/api/people', (req, res)=>{
    res.status(200).json({ success: true, data: people})
})

// POST METHOD(INSERTION)
app.post('/api/people', (req, res) =>{
    const { name } = req.body
    if(!name){
        return res.status(400).json({ success: false, msg: 'please provide name value'})
    }
    res.status(201).send({ success: true, person: name})
})

app.post('/api/people/postman', (req,res) =>{
    const { name } = req.body
    if (!name){
        return res.status(400).json({ success: false, msg: 'please provide name value'})
    }
    res.status(201).send({success:true, data:[...people,name]})
})

// PUT METHOD - (UPDATION)
app.put('/api/people/:id', (req, res)=>{
    const { id } = req.params
    const { name } = req.body

    const person = people.find((p) => p.id === Number(id))
    if (!person){
        return res.status(404).json({ success: false, msg: `no person with id ${id}`})
    }

    const newPeople = people.map((p) =>{
        if (p.id === Number(id)){
            p.name = name
        }
        return p
    })
    res.status(200).json({ success: true, data: newPeople})
})

// DELETE REQUEST
app.delete('/api/people/:id', (req, res)=>{
    const { id } = req.params
    const person = people.find((person) => person.id === Number(id))
    if (!person){
        return res.status(404).json({ success: false, msg: `no person with id ${id}`})
    }
    const newPerson = people.filter((person) => person.id !== Number(id))
    return res.status(200).json({ success: true, data: newPerson})
})


app.listen(5000, ()=>{
    console.log("Server is listening to port 5000...")
})

// 400 -POST unsuccessful
// 401 - Unauthorised access
// 404 - not found record
// 201 - POST successful
// 200 - Authorized Access