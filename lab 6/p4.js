const fs=require("fs")

fs.appendFile("demo.txt","Hello , Yash",(err)=>{
     if(err){
        console.log("Error: ",err)
        return
    }
    console.log("data succesfully Append")
})