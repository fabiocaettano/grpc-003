const { Router } = require('express');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const PurchaseController = require('./controllers/PurchaseController');

const authMiddleware =  require('./middlewares/auth');

const router = Router();

router.get('/users/:id', UserController.show);
router.post('/users',UserController.store);
router.post('/sessions',SessionController.store);

router.use(authMiddleware);

router.get('/purchases/:id', PurchaseController.show);
router.post('/purchases', PurchaseController.store); 
router.post('/purchases',PurchaseController.index);


module.exports = router;