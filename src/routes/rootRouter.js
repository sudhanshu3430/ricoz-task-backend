const express = require('express');
const userRouter = require('../controller/userController')
const taskRouter = require('../controller/taskController')

const router = express.Router();

router.use('/user', userRouter);    
router.use('/task', taskRouter);

module.exports = router;