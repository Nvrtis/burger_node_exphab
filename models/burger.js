const orm = require("../config/orm")

const burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res)

        })
    }
}

// orm.insertOne("Chicken burger", "true")

// orm.selectAll()

// orm.updateOne("Beef burger", 1)

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.

module.exports = burger