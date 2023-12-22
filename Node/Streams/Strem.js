const {createReadStream} = require('fs')

const stream = createReadStream('./Content/second.txt',{
    highWaterMark:9000,
    encoding : "utf8"
})

stream.on('data',(result)=>{
    console.log('result');
})