const fs=require("fs")

fs.mkdir("DEMO_for_lab_6",(err)=>{
     if(err){
        if(err.code==="EEXIST")
            console.log("Error file already created: ",err)
        else{
            console.log("Error: ",err)
        }
        return
    }
    console.log("succesfully")
})