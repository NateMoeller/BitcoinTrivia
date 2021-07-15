let router = require('express').Router();

var questionController = require('./questionController');

router.route('/questions').get(questionController.index);
router.route('/answer').post(questionController.post);

module.exports = router;