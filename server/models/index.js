var db = require('../db');

module.exports = {
  messages: {
    get:function(callback){
      db.query('SELECT * FROM messages', (err, results)=> {
        console.log('this is the result', results);
        callback(null, results);
      });
    },
    post: function (options, callback) {
      db.query("INSERT INTO messages (message, roomname) VALUES(?, ?)", options, (err, results) => {
        if (err){
          console.log(err);
        } else {
          callback(null, results);
        }
      }) 

    } 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', (err, results)=> {
        callback(null, results);
      });
    },
    post: function (options, callback) {
      db.query("INSERT INTO users (username) VALUES(?)", options, (err, results) => {
        if (err){
          console.log(err);
        } else {
          callback(null, results);
        }
      }) 
    }
  }
};

