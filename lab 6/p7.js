const fs=require("fs")

fs.readdir("../lab 6",(err,data)=>{
    if(err){
        console.log("Error: ",err)
        return
    }
    else{
        data.forEach(i=>{
            console.log(i)
        })
    }
})