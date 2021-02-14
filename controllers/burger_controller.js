var express = require("express");
var router = express.Router();
// import the model (burger.js) to use its database function
var burger = require("../models/burger.js");

// create route for get all burgers
router.get("/", function(req, res) {
    burger.selectAll(function(result) {
        var burgerObj = {
            burgers: result
        };
        res.render("index", burgerObj);
    });
});



router.post("/api/burgers", function(req, res){
    console.log(req.body);
    burger.insertOne( ["name"], [req.body.burger_name], function (result) {
        res.json(result);
    })
});

router.put("/api/burgers/:id", function(req, res){
    const id = req.params.id
burger.updateOne()
}
)


// router.put("/burger/:id", (req,res)=>{
    

// })

module.exports = router