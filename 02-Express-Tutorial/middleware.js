// middleware - when working with a middleware you must pass it to the next middleware
// unless we're terminating the whole cycle by sending back the response.
const middleware = (req, res, next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    // res.send('Testing')
    next()
}

module.exports = middleware