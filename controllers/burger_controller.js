var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
// 4. Create the `router` for the app, and export the `router` at the end of your file.
router.get("/", (req,res)=>{
burger.selectAll(function(result) {
    const burgerObj = {
        burger: result
    }
    console.log(burgerObj);
    res.render("index", burgerObj)
})

})

router.post("/burger/add", (req,res)=>{
    

})

router.put("/burger/:id", (req,res)=>{
    

})

module.exports = router