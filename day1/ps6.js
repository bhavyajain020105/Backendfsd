const fs = require('fs');
const data = "hello "
const append=()=>{
 fs.writeFileSync("./data.txt",data,(err) =>{
    if(err) console.log(err);
    else console.log("File is append");
 });
}

console.log('before');
append();