var express = require('express');
var router = express.Router();
var burger = require('../models/burger')
var yetToDevourCounter = 0;
var alreadyDevouredCounter = 0;

router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/index', function (req, res) {
  burger.all(function(data) {

    
    res.render("index", {
      burger: data,
      helpers: {
        nonDevouredCounter: function() {
          yetToDevourCounter++;
          return yetToDevourCounter;

        },
        devouredCounter: function() {
          alreadyDevouredCounter++
          return alreadyDevouredCounter;
        }
      }
    });
    yetToDevourCounter = 0;
    alreadyDevouredCounter = 0;
  });
});

router.post('/',function(req,res){

burger.create( ['burger_name','devoured'],
[req.body.burgerName, false],
function(){
  res.redirect('/index');
})
})
router.put('/:id',function(req,res){
  var condition = "id = " + req.params.id;
burger.update({devoured:true},condition,function(){
  res.redirect('/index');
})
})



module.exports = router;
