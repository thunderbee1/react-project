var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '123',
  database : 'my_database'
});
 
module.exports = connection