const express = require('express')
const router = express.Router()
const appController = require('../controllers/userController')

router.post('/signUp',appController.createUser);
module.exports = router;