const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/signUp',userController.createUser);
router.post('/logIn',userController.checkUser);

router.post('/sigUpAdmin',userController.createAmine)

module.exports = router;