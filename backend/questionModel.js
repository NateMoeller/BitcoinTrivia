
const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required: true
    },
    answer: {
        type: Number,
        required: true
    },
    labels: {
        type: [String]
    },
    difficulty: {
        type: Number
    }
});

questionSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.answer;
    return obj;
}

const Question = module.exports = mongoose.model('question', questionSchema);

module.exports.get = function (callback, limit) {
    Question.find(callback).limit(limit);
};