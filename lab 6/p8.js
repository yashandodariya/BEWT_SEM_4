const fs=require("fs")

fs.copyFile("demo.txt","output.txt",(err)=>{
    if(err){
        console.log("Error: ",err)
        return
    }
    console.log("succesfully")
})