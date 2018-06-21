const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')


// var id = '5b2ac531b380f02e535acfe0'

// if(!ObjectID.isValid(id)){
//     console.log("id not valid")
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('todos',todos)
// }).catch((e)=>{
//     console.log(e);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo)
// }).catch((e)=>{
//     console.log(e);
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         console.log("id not found")
//     }
//     console.log('todoById', todo)
// }).catch((e)=>{
//     console.log(e);
// })
var userID = "5b2ac93044e6732f9dfeb968"
User.findById(userID).then((user) => {
    if (!user) {
        console.log("id not found")
    }else{
        console.log("user",user)
    }
}).catch((e)=>{
    console.log(e)
})