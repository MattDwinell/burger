var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


//basic index population:
router.get('/', function(request, response){
    burger.selectAll(function(data){
        console.log('this is being sent to handlebars' + data);
        var handleBarsObject = {
            burgers: data
        }
        console.log(handleBarsObject);
        response.render('index', handleBarsObject);

    })
})

//function for posting a new burger to the db:
router.post("/api/burgers", function(req, res){
    console.log(req.body);
    console.log(req.body.data);
    burger.insertOne(["burger_name", "devoured"],
    [req.body.name, req.body.devoured], 
    function(result){
        res.json({id:result.insertId})
    } )
})

//function for updating devoured status
router.put("/api/burgers/:id", function(req, res){
  var devoured = "id =" + req.params.id;
  burger.updateOne({
      devoured: req.body.devoured
  }, devoured, function(result){
      if(result.changedRows === 0){
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  })  
})

module.exports = router;