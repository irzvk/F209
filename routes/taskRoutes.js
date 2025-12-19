const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const isAuth = require('../middleware/authMiddleware');

router.use(isAuth);

router.get('/', taskController.list);
router.get('/add', taskController.showAdd);
router.post('/add', taskController.add);

router.get('/edit/:id', taskController.showEdit);
router.post('/edit/:id', taskController.edit);

router.post('/toggle/:id', taskController.toggleComplete);
router.get('/delete/:id', taskController.delete);

module.exports = router;
