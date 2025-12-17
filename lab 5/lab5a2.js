const url="https://darshanums.in/Login.aspx?name=yash&age=21"
const obj=new URL(url)
console.log("hostname = "+obj.hostname)
console.log("pathname = "+obj.pathname)
console.log("protocol = "+obj.protocol)
obj.searchParams.forEach((value,key)=>{
    console.log(`${value}:${key}`)
})