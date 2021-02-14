const orm = require("../config/orm")

const burger = {
    selectAll: function() {
        orm.selectAll(function(res) {
            cb(res)

        })
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne(burgerName, function(res) {
            cb(res)

        })
    },
    updateOne: function(devoured, id,  cb) {
        orm.updateOne(devoured, id, function(res) {
            cb(res)

        })
    },
}




module.exports = burger