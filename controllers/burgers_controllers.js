var express = require('express');
var router = express.Router();
var burger = require('../models/burger')


router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/index', function (req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
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
