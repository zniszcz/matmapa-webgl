const redis = require('redis');
const client = redis.createClient();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('node-uuid');
const port = 8085;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  let todos = [];
  client.hgetall('Todo', (error, objects) => {
    if (error) {
      throw error;
    }
    res.send({objects});
  });
});

app.post('/add', function(req, res) {
  const newTodo = {
    id: uuid.v1(),
    name: req.body['todo-text'],
  };
  client.hset('Todo', newTodo.id, newTodo.name);
  res.send(newTodo);
});

app.post('/remove', function(req, res) {
  client.hdel('Todo', req.body['todo-text']);
  res.redirect('back');
});

app.listen(port);
