const c_p=require("child_process")

c_p.exec("node --version",(err,stdout,stderr)=>{
    if(err){
        console.log(`err:${err}`)
    }
    if(stdout){
        console.log(`stdout:${stdout}`)
    }
    if(stderr){
        console.log(`stderr:${stderr}`)
    }
})

c_p.exec("python 1.py",(err,stdout,stderr)=>{
    if(err){
        console.log(`err:${err}`)
    }
    if(stdout){
        console.log(`stdout:${stdout}`)
    }
    if(stderr){
        console.log(`stderr:${stderr}`)
    }
})