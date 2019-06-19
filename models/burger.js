var orm = require('../config/orm.js');
var burger = {
    selectAll: function(callback){
        orm.selectAll('burgers', function(res){
            callback(res);
        })
    },
    insertOne: function(cols, vals, callback){
        console.log(cols, vals, callback);
        orm.insertOne('burgers', cols, vals, function(res){
            callback(res);
        })
    },
    updateOne: function(objColVals, devoured, callback){
        orm.updateOne('burgers', objColVals, devoured, function(res){
            callback(res);
        })
    }
}
module.exports = burger;