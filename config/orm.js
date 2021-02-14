var connection = require("./connection.js");

var orm = {
    selectAll: function(burgers, cb) {
      var queryString = "SELECT * FROM ?";
      connection.query(queryString,burgers, (err, result)=> {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(burger_name, cb) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES (?)  ";
      connection.query(queryString, [burger_name], (err, result)=> {
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: function(colname, id, cb) {
      var queryString =
        "UPDATE burgers SET devoured = ? WHERE id = ?";
  
      connection.query(queryString,[colname, id], (err, result) =>{
          if (err) throw err;
          cb(result);
        }
      );
    }
  }
  
  module.exports = orm;
  