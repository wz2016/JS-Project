var express = require('express');
var router = express.Router();

var Category = require('../models/category')

/* GET categories listing. */
router.get('/', function(req, res, next) { // '/' = '/categories'
  // res.send('respond with a resource');
  Category.getCategories(function(err, categories){
  	if(err){
  		console.log(err);
  	}
  	res.json(categories);
  });

});

/* GET categories listing. */
router.get('/:id', function(req, res, next) { // '/' = '/categories'
  // res.send('respond with a resource');
  Category.getCategoryById(req.params.id, function(err, category){
  	if(err){
  		console.log(err);
  	}
  	res.json(category);
  });

});


module.exports = router;
