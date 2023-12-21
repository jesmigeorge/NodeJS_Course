const authorize = (req, res, next) =>{
    const { user } = req.query
    if (user === 'jesmi'){
        // works for link : http://localhost:5000/api/items?user=jesmi
        req.user = { name: 'jesmi', id: 3}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
    // console.log('authorize')
    // next()
}

module.exports = authorize;