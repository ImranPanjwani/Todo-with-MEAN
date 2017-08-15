var Todo = require('../models/todoModels');
var bodyParser = require('body-parser');

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));

    app.get('/api/todos/:uname',function(req,res){

        Todo.find({username:req.params.uname})
            .then((todos)=>{
                res.send(todos);
            })
            .catch((err)=>{
                throw err;
            });

    });

    app.get('/api/todo/:id',function(req,res){
        
        Todo.findById(req.params.id)
            .then((todo)=>{
                res.send(todo);
            })
            .catch((err)=>{
                throw err;
            });

    });

    
    app.post('/api/todo',function(req,res){
        if(req.body.id){
            /*
            sample test data
            ---------------
            {
            "id": Enter one of the ids of inserted data 
            "isDone":false,
            "todo":"Go to office",
            "hasAttachment":true
            }
            ---------------
            */
            Todo.findByIdAndUpdate(req.body.id,{
                todo : req.body.todo,
                isDone : req.body.isDone,
                hasAttachment : req.body.hasAttachment
            })
                .then((data)=>{
                    res.send('Success');
                })
                .catch((err)=>
                {
                    throw err
                });
        }
        else{
            /*
            sample test data
            ---------------
            {
            "isDone":false,
            "todo":"Go to office",
            "hasAttachment":true
            }
            ---------------
            */

            Todo.create({
                username : 'rajesh',
                todo:req.body.todo,
                isDone:req.body.isDone,
                hasAttachment:req.body.hasAttachment
            })
                .then((data)=>{
                    res.send('Success');
                })
                .catch((err)=>
                {
                    throw err
                });
        }
    });
    app.delete('/api/todo',function(req,res){
        /*
        {
            "id": Enter one of the ids of inserted data 
        }
        */
        Todo.findByIdAndRemove({_id:req.body.id})
            .then((data)=>{
                res.send('Success');
            })
            .catch((err)=>
            {
                throw err
            });

    });


} 