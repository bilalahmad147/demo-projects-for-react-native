var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', //empty for window
  database: 'studentsdetails',
});

var server = app.listen(4545, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('start');
});

con.connect(function (error) {
  if (error) console.log(error);
  else console.log('connected');
});

app.get('/', function (req, res) {
  const sqlInsert =
    "INSERT INTO users (id, name, email, degree) VALUES (6, 'zubi', 'zubi@gmail.com', 'BS chemical engineering')";
  con.query(sqlInsert, (error, result) => {
    console.log("error", error);
    console.log("result", result);
  })
  con.query('select * from users', function (error, rows, fields) {
    if (error) console.log(error);
    else {
      console.log(rows);
      res.send(rows);
    }
  });
});
