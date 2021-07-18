const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to your homepage')
    }
    if(req.url === '/about'){
        res.end('This is our History')
    }
    res.end(`
    <h1>Oops</>
    <p>Something went wrong</p>
    <a href='/'>back home</a> 
    `)
})

server.listen(5000)