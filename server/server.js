const express = require('express')
const bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose.js')
var {Todo} = require('./models/todo.js')
var {User} = require('./models/user.js')
var {ObjectID} = require('mongodb')

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
app.get('/todos/:id',(req,res)=>{
    var id = req.params.id
    //validate id using isValid
    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }

        res.send({todo})
    }).catch((e)=>{
        return res.status(400).send();
    })
})

var port = 3000
app.listen(port, () => {
    console.log(`started on port ${port}`)
})

module.exports = {app};


