const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(` data received ${name} and ${id}`)
})

customEmitter.on('response',()=>{
  console.log("data received")
})

customEmitter.emit('response',"Siva",22)