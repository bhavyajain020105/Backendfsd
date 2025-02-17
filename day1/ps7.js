const fs= require('fs');
fs.unlink("./data.txt",(err)=>{
    console.log(err)
})
console.log("file deleted");

