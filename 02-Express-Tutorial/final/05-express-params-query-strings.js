const express = require('express')
const app = express()
const { products } = require('./data.js')

app.get('/', (req,res) =>{
    // res.json([{name: "Jesmi"},{name: "Jeswin"}])
    // res.json(products)
    res.send('<h1> Home Page </h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) =>{
    const newProducts = products.map((product) =>{
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/1', (req, res) =>{
    const singleProduct = products.find((product) => product.id === 1)
    res.json(singleProduct)
})

// route params
app.get('/api/products/:productID', (req, res)=>{
    console.log(req.params)
    const { pID } = req.params
    const singleProduct = products.find((product)=> product.id === pID)
    if (!singleProduct){
        return res.status(404).send('Product does not exist')
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res)=>{
    const { pID, rID } = req.params
    res.send('Complex example of request params')
})

// app.get('/api/v1/query', (req,res)=>{
//     // link : http://localhost:5000/api/v1/query?name=jesmi&id=4
//     console.log(req.query)
//     res.send(req.query)
// })

app.get('/api/v1/query', (req, res)=>{
    // link : http://localhost:5000/api/v1/query?search=a&limit=2
    const { search, limit } = req.query
    let sortedProducts = [...products]
    if (search){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.name.startsWith(search)
        })
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if (sortedProducts.length < 1){
        //res.status(200).send('No products matched your search')
        return res.status(200).json({success:true,data:[]})
    }
    return res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
    console.log('server listening on port 5000...')
})