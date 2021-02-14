var express = require("express");
var router = express.Router();
// import the model (burger.js) to use its database function
var burger = require("../models/burger.js");

// create route for get all burgers
router.get("/", function (req, res) {
    burger.selectAll(function (result) {
        var burgerObj = {
            burgers: result
        };
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([req.body.burger_name], (result) => {
        res.json(result);
    })
});

router.put("/api/burgers/:id", function (req, res) {
    const id = req.params.id

    burger.updateOne([req.body.devoured, id], (result) => {
        res.json(result);
    })
}
)


// router.put("/burger/:id", (req,res)=>{


// })

module.exports = router