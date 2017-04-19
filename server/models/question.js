var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
	// question: String,with description
	name: String,
	category: String,
	topic: String,
	description: String,
	answers: []
}, {timestamps: true});

console.log("Going through model question");
mongoose.model('Question', QuestionSchema);
