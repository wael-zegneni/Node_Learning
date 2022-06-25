const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end("welcome to out home page")
    }
    if (req.url === '/about'){
        res.end("this is the about page")
    } else{
        res.end("error page")
    }
})

server.listen(5000)