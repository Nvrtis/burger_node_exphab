var connection = require("./connection.js");

var orm = {
    selectAll: function() {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, (err, result)=> {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(burger_name, devoured) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES (?)  ";
      console.log(queryString);
      connection.query(queryString, [burger_name, devoured], (err, result)=> {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(colname, id) {
      var queryString =
        "UPDATE burgers SET burger_name= ? WHERE id = ?";
  
      connection.query(
        queryString,
        [colname, id],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;
  