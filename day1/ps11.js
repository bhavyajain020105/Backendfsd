const fs=require('fs/promises');

const write = async()=>{
    const data ="I AM NEW DATA"
    fs.writeFile("./mydir/data.txt",data,(err)=>{
        if(err)
            console.log("Error writing data to file",err)
        else console.log("File updated succesfully");
    });
}
write();