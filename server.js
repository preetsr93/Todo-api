var express = require ('express');
var app = express();
var port = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'Meet mom for lunch',
    completed: false
},
 {
     id: 2,
     description: 'Go to market',
     completed: false
},
{
    id: 3,
    description: 'Buy milk',
    completed: true
}
];

// GET /todos
// app.get('/todos', function (req, res){
//     res.json(todos);
// });

//GET /todos/:id
app.get('/todos/:id', function (req, res){
    //res.json('Asking for todo with id of ' +req.params.id);
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo;
    todos.forEach (function (todo) {
        if (todoId === todo.id){
            matchedTodo = todo;
        }
    });
    if (matchedTodo) {
        res.json (matchedTodo);
    } else {
        res.status(404).send();
    }   
        
});

// app.get('/', function (req, res){
//     res.send("Todo API Root");
// });

app.listen(port, function(){
    console.log('Express listening on Port ' + port);
});