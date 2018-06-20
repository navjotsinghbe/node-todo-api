// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')


MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, client)=>{
    if(err){
        console.log("cant connect to mongo db server")
    }
    console.log("connection successful to mongo db")
    const db = client.db('TodoApp')
    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed : false
    // },(err,res)=>{
    //     if(err){
    //        return  console.log(err)
    //     }

    //     console.log(JSON.stringify(res.ops,undefined,2))
    // })
    // db.collection('Users').insertOne({
    //     name: "Navjot Singh",
    //     location: "Sydney",
    //     age : 28
    // },(err,res)=>{
    //     if(err){
    //        return  console.log(err)
    //     }

    //     console.log(JSON.stringify(res.ops,undefined,2))
    // })
    client.close();
});