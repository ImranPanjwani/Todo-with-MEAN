var Todo = require('../models/todoModels');

module.exports = function(app){
    app.get('/api/setupTodo',function(req,res){

        var todos = [
            {
                username:'rajesh',
                todo:'Buy shoes',
                isDone:false,
                hasAttachment:false
            },
            {
                username:'rajesh',
                todo:'Learn MEAN',
                isDone:false,
                hasAttachment:false
            },
            {
                username:'rajesh',
                todo:'Complete assignment',
                isDone:false,
                hasAttachment:false
            }
        ];
        Todo.create(todos,function(err,results){
            res.send(results);
        });

    });
}