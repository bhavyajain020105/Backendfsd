const fs = require('fs');
const data = "hello "
const write=()=>{
 fs.writeFileSync("./data.txt",data,(err) =>{
    if(err) console.log(err);
    else console.log("File is updated");
 });
}

console.log('before');
write();
