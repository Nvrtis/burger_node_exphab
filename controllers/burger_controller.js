var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Read rout for burgers
router.get("/", function (req, res) {
    burger.selectAll(function (result) {
        var burgerObj = {
            burgers: result
        };
        res.render("index", burgerObj);
    });
});

// Create route for burgers
router.post("/api/burgers", function (req, res) {
    burger.insertOne([req.body.burger_name], (result) => {
        res.json(result);
    })
});

// Utdate route for burgers
router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.body.devoured, req.params.id, function(result) {
        if (result.changedRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Delete route for burgers
router.delete("/api/burgers/:id", function(req, res) {
    burger.deleteOne(req.params.id, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }   else {
            res.status(200).end();
        }
    });
});


module.exports = router