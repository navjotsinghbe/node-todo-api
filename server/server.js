const express = require('express')
const bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose.js')
var {Todo} = require('./models/todo.js')
var {User} = require('./models/user.js')

var app = express()
app.use(bodyParser.json())

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text : req.body.text
    })
    todo.save().then((doc)=>{
        res.send(doc)
    },(e)=>{
        res.status(400).send(e);
    })
    console.log(req.body)
})
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({
            todos,
        })
    },(e)=>{
        res.status(400).send(e)
    })
})
var port = 3000
app.listen(port, () => {
    console.log(`started on port ${port}`)
})

module.exports = {app};


