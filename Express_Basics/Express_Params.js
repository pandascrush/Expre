// const express = require('express')
// const app = express()
// const path = require('path')
// const {Product,Users} = require('./BasicJson')

//Ex: 1

// app.get('/',(req,res)=>{
//     res.json([{"Name":"Siva"} , {"Age":22}])
// })

// Ex:2

// app.get('/',(req,res)=>{
//     res.json(Users)
// })

//Ex: 3

// app.get('/',(req,res)=>{
//     const filterUser = Users.map((prod)=>{
//         const {id,Name,Age} = prod
//         return {id,Name,Age}
//     })

//     res.json(filterUser)
// })

// Ex : 4  ---> Just we have get the single value


// app.get('/api/product/1',(req,res)=>{
//     console.log(req)
//     console.log(req.params);

//     const filterUser = Users.find((user)=>{
//         const finded = user.id == 1
//         return finded
//     })

//     res.json(filterUser)
// })



// Ex: 5 ---> Params Concept

// app.get('/api/product/:pID',(req,res)=>{
//     console.log(req)
//     console.log(req.params);
    
//     const {pID} = req.params

//     const filterUser = Users.find((user)=>{
//         const finded = user.id == Number(pID)
//         return finded
//     })

//     if(!filterUser){
//         return res.status(404).send("Page not found")
//     }

//     res.json(filterUser)
// })



// app.listen(5000,()=>{
//     console.log('server listening on port 5000...');
// })