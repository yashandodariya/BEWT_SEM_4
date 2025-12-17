const http=require("http")

 const server=http.createServer((req,res)=>{
    res.setHeader("contact-type","text/plain")
    if(req.url=="/"){
        res.end("Home page")
    }
    else if(req.url=="/about"){
        res.end("About page")
    }
    else if(req.url=="/contact"){
        res.end("contact page")
    }
    else if(req.url=="/profile"){
        res.end("profile page")
    }
    else if(req.url=="/login"){
        res.end("Login page")
    }
    else{
        res.end("Page not found")
    }
 })

  server.listen(3000,()=>{
    console.log("server started at @ 3000")
  })