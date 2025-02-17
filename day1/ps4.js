const fs = require('fs');

const read=()=>{
    fs.readFile('./data.txt', 'utf8',(err,data)=>{
        if(err) console.log.error(err);
        else console.log(data);
    })

}

console.log("Iam before reading");
read();
console.log("i am after reading");



