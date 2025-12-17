const url="https://darshanums.in/Login.aspx"
const obj=new URL(url)
obj.pathname="path/path1/path2"
obj.searchParams.append("name","yash");
console.log(`obj = `+obj.toString())