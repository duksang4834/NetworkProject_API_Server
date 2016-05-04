var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

/* GET home page. */
connection.connect();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res) {
	var query = 'SELECT account FROM users';

	connection.query(query, function(err, rows, fields) {
  		if (err) {
  			console.log('error');
  			throw err;
  		}
  		console.log('success');
		});
});

module.exports = router;
