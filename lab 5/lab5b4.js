const events=require("events")
const emmiter=new events()
emmiter.on('greet',(data)=>{
    console.log("Hello, "+data)
})
setInterval(()=>{
    emmiter.emit('greet','yash')
},2000)

