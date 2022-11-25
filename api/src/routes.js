const { Router } = require('express');
import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

const router = Router();

router.get('/users/:id', UserController.show);
router.post('/users',UserController.store);
router.post('/sessions',SessionController.store);

module.exports = router;