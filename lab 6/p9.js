const fs=require("fs")

if(fs.existsSync("demo.txt")){
    console.log("succesfully Exits")
}
else{
    console.log("can not Exits")
}
