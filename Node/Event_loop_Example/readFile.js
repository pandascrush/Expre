const fs = require('fs')

console.log('First Runner');

fs.readFile('./Content/first.txt','utf8',(err,value)=>{
    if(err){
        console.log(err);
    }

    console.log(value)
    console.log("Innner for readFile")
})

console.log('Outter of readFile');
