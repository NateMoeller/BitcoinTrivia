
const Question = require('./questionModel');

/*
 * Endpoint to get a set of questions
 */
exports.index = (req, res) => {
    // TODO: get random questions from DB
    const queryParams = req.query;
    const limit = queryParams.limit ? Number(queryParams.limit) : null;

    Question.get((err, questions) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
            return;
        }

        res.json({
            message: 'Questions retrieved successfully',
            data: questions
        });
    }, limit);
};

/*
 * Endpoint to check if a answer is correct to a question
 */
exports.post = (req, res) => {
    const questionId = req.body.questionId ? req.body.questionId : null;
    const answer = req.body.answer || req.body.answer === 0 ? Number(req.body.answer) : null;

    if (questionId === null || answer === null) {
        res.status(400).json({
            message: 'Incorrect body specified. Must have a questionId and answer'
        });
        return;
    }
    
    Question.findById(questionId, (err, question) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
            return;
        }

        const correctAnswer = Number(question.answer);
        res.json({
            message: 'success',
            data: answer === correctAnswer
        });
    });
};