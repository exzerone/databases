var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  database: 'chat',
  user: 'student',
  password: 'student'    
});

connection.connect(function(err) {
  if (err) {
    console.log('connection error!', err.stack)
    return;
  }
  console.log('connected as id ' + connection.threadId);
})



module.exports = connection;


