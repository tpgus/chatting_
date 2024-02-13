const router = require('express').Router();

const userController = require('../controllers/users');

router.get('/', userController.getAllUser);
router.post('/new', userController.addUser);

module.exports = router;
