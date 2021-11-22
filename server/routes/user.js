const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.get('/home', userController.view);
router.post('/home', userController.find);
router.get('/adduser', userController.form);
router.get('/controlpanel', userController.control);
router.get('/dashboard', userController.dashboardhome);
router.get('/biometric', userController.biometrichome);

router.post('/adduser', userController.create);
router.get('/edituser/:id', userController.edit);
router.post('/edituser/:id', userController.update);
router.get('/viewuser/:id', userController.viewall);
router.get('/home:id',userController.delete);


  
module.exports = router;