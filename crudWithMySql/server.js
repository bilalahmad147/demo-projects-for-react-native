var express = require('express');
var app = express();

var mysql = require('mysql2');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

var db = mysql.createConnection({
  host: 'localhost',
  port: '3300',
  user: 'root',
  password: 'rootpassword', //empty for window
  database: 'crud_contact',
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('start');
});

app.get('/api/get', function (req, res) {
  const getSql = 'SELECT * FROM contact_db';
  db.query(getSql, (error, result) => {
    res.send(result);
    console.log(result);
  });
});

app.post('/api/post', function (req, res) {
  const {name, email, contact} = req.body;
  const postData = 'INSERT INTO contact_db (name,email,contact) VALUES (?,?,?)';
  db.query(postData, [name, email, contact], (error, result) => {
    console.log('error =>', error);
    console.log('result =>', result);
  });
});

// app.delete('/api/remove/:id', function (req, res) {
//   const {id} = req.params;
//   const removeData = 'DELETE FROM contact_db WHERE id = ?';
//   db.query(removeData, id, (error, result) => {
//     console.log('error =>', error);
//     console.log('result =>', result);
//   });
// });

app.get('/', function (req, res) {
  // const sqlInsert =
  //   "INSERT INTO contact_db (name,email,contact) VALUES ('awan', 'awan@gmail.com', 00114562233)";
  // db.query(sqlInsert, (error, result) => {
  //   console.log('error =>', error);
  //   console.log('result =>', result);
  // });
  // res.send('hello express');
});
