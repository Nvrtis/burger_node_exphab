const orm = require("../config/orm.js")

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers",function(res) {
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
    deleteOne:function(id,  cb) {
        orm.deleteOne(id, function(res) {
            cb(res)

        })
    },
}




module.exports = burger