const express = require('express');

const {indexView,iconView,user_indexView,biometricView} = require('../controllers/homecontroller');

const router = express.Router()

router.get('/', indexView);
 router.get('/icons', iconView);
 router.get('/user_index',user_indexView);
 router.get('/biometric', biometricView);

module.exports = {
    routes: router
}





