var connection = require("./connection.js");

var orm = {
    selectAll: function(burgers, cb) {
      var queryString = "SELECT * FROM "+burgers+";";
      connection.query(queryString, (err, result)=> {
        if (err) throw err;
        cb(result);
      }).catch(err=>console.log(err));
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
    },
  deleteOne: function(id, cb) {
    var queryString =
      "DELETE FROM burgers WHERE id = ?";

    connection.query(queryString,id, (err, result) =>{
        if (err) throw err;
        cb(result);
      }
    );
  }
}
  
  module.exports = orm;
  