// Creates ports and listners

const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./controllers/burger_controller")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// make the starting folder public
app.use(express.static("public"));

// express handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// render site
app.use(router);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  