const express = require('express');
const router = express.Router();
const userController = require("../app/api/controllers/users");

router.get('/users', userController.getAllUser)
router.post('/register', userController.create);
router.delete('/remove', userController.remove);
router.post('/authenticate', userController.authenticate)
//router.get('/', userController.user)

module.exports = router;