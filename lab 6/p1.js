const fs=require("fs")

fs.readFile("demo.txt",(err,data)=>{
    if(err){
        console.log("Error: ",err)
        return
    }
    console.log("Data: ",data.toString())
})