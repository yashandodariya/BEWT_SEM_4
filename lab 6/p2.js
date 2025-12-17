const fs=require("fs")

const data=fs.readFileSync("demo.txt","utf-8")
try{
     console.log("data: ",data) 
}catch(err){
    console.log("Error: ",err)
}