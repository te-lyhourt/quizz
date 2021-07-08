const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const quizController = require('../controllers/quizController')

router.get('/homepage',userController.loginCheck)

router.post('/signUp',userController.createUser);

router.post('/logIn',userController.checkUser);

router.get('/logOut',userController.logOut);

router.post('/sigUpAdmin',userController.createAmine)

router.post('/addQuiz',quizController.createQuiz)

router.get('/homepage/deletequiz/:quizID', quizController.deleteQuiz); 

router.get('/quizpage/:userID',quizController.loadQuizpage)

router.get('/:userID/getQuizByPIN/:quizPIN',quizController.getQuizByPIN)


module.exports = router;