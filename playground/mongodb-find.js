// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID} = require('mongodb')


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        console.log("cant connect to mongo db server")
    }
    console.log("connection successful to mongo db")
    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b2673bb88c2242ff11fd682')
    // }).toArray().then((docs) =>{
    //     console.log("in Todos")
    //     console.log(JSON.stringify(docs,undefined,2))

    // },(err)=>{
    //     console,log("error in fetch",err)
    // })

    db.collection('Todos').find().count().then((count) =>{
        console.log("in Todos:",count)

    },(err)=>{
        console,log("error in fetch",err)
    })
    client.close();
});