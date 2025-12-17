const http=require("http")
const fs=require("fs")

 const server=http.createServer((req,res)=>{
    res.setHeader("contact-type","text/plain")
    if(req.url=="/"){
        res.end("Home page")
    }
    else if(req.url=="/about"){
        fs.readFile("about.txt",(err,data)=>{
            if(err){
                res.end("ERROR = ",err)
            }
            res.end(data)
        })
    }
    else if(req.url=="/contact"){
        fs.readFile("contact.txt",(err,data)=>{
            if(err){
                res.end("ERROR = ",err)
            }
            res.end(data)
        })
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