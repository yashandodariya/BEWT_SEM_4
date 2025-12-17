const os=require("os")
console.log("total memory in GB="+os.totalmem()/1000000000)
console.log("total free memory in GB="+os.freemem()/1000000000)