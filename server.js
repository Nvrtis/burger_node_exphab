const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./controllers/burger_controller")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(router);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  