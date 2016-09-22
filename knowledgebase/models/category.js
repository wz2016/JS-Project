var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name: {
		type: String,
		index: true,
		required: true
	},
	description:{
		type: String
	}
});

// get All Categories
var Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.getCategories = function(callback){
	Category.find(callback);
}


// Get category by Id
module.exports.getCategoryById = function(id, callback){
	Category.findById(id, callback);
}	

//Get category categories
module.exports.getCategoriesByCategory = function(category, callback){
	var query = {category: category};
	Category.find(query, callback);
}

module.exports.createCategory = function(newCategory, callback){
	newCategory.save(callback);
}
