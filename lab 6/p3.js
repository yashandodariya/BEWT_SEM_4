const fs=require("fs")

fs.writeFile("demo.txt","hii i am yash",(err)=>{
    if(err){
        console.log("Error: ",err)
        return
    }
    console.log("File succesfuly write")
})
