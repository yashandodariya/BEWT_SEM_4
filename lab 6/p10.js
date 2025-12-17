const fs=require("fs")

fs.watch("demo.txt",(eventType,fileName)=>{
    console.log("Event Type : ",eventType)
    console.log("File Name : ",fileName)
})