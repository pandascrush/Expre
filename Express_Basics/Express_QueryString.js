const express = require('express')
const app = express()
const path = require('path')
const {Product,Users} = require('./BasicJson')

// // Ex: 1

// // app.get('/',(req,res)=>{
// //     res.json([{"Name":"Siva"} , {"Age":22}])
// // })

// // Ex:2

// // app.get('/',(req,res)=>{
// //     res.json(Users)
// // })

// // Ex: 3

// // app.get('/',(req,res)=>{
// //     const filterUser = Users.map((prod)=>{
// //         const {id,Name,Age} = prod
// //         return {id,Name,Age}
// //     })

// //     res.json(filterUser)
// // })

// // Default Page as a Home Page

// app.get('/',(req,res)=>{
//     res.send('<h1>Welcome to our Page</h1> </br> <a href="/api/product/1">CLick here</a>')
// })


// // Ex : 4  ---> Just we have get the single value


// app.get('/api/product/1',(req,res)=>{
//     console.log(req)
//     console.log(req.params);

//     const filterUser = Users.find((user)=>{
//         const finded = user.id == 1
//         return finded
//     })

//     res.json(filterUser)
// })



// // Ex: 5 ---> Params Concept

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


// // Query String Examples

// app.get('/api/view/query',(req,res)=>{
//     // console.log(req.query);
//     const {search,limit} = req.query
//     let staticProcuts = [...Users]
//     // console.log(staticProcuts.Name);
    

//     if(search){
//         staticProcuts = staticProcuts.filter(prod=>{
//             return prod.Name.startsWith(search)
//         })
//     }

//     if(limit){
//         staticProcuts= staticProcuts.slice(0,Number(limit))
//     }

//     if(staticProcuts.length > 1){
//         // return res.send("No values matched")
//         return res.json([{data:0,values:""}])
//     }

//     res.status(200).json(staticProcuts)
// })

app.listen(5000,()=>{
    console.log('server listening on port 5000...');
})