var models = require('../models');

module.exports = {
  messages: {
    get:function (req, res) {
      models.messages.get((error, results)=> {
        if (error){
          console.log(error);
        }
        res.writeHead(200);
        res.end(JSON.stringify(results));
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // let sql = `INSERT INTO messages (message) VALUES('im happy')`;
      // let options = [req.body.message, req.body.username, req.body.roomname];
      console.log('this is body message ', req.body.message)
      console.log('this is body roomname ', req.body.roomname)
      let options = [req.body.message, req.body.roomname];
      // console.log('this is the message: ', req.body.message);
      models.messages.post(options,(err, results) => {
        if (err) {
          throw err;
        } else {
          res.end('success');
        }
      });

      

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((error, results)=> {
        if (error){
          throw error;
        } 
        res.writeHead(200);
        res.end(JSON.stringify(results));
      });
    },
    post: function (req, res) {
      // let sql = `INSERT INTO users (username) VALUES('Valjean')`;
      // console.log(req);
      let options = [req.body.username];
      models.users.post(options,(err, results) => {
        if (err) {
          console.log('error');
          throw err;
        } else {
          console.log('success');
          res.end();
        }
      });
    }
  }
};

