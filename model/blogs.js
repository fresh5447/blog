var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
	title: String,
	body: String
});

mongoose.model('Blog', blogSchema);