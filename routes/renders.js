const express = require('express');
const authController = require('../controllers/auth');
const logicController = require('../controllers/renders');
const { notEmpty } = require('../utils/validations')
const router = express.Router();

router.get('/login', (req, res) => {
    return res.status(200).render('Login')
})

router.get('/register', (req, res) => {
    return res.status(200).render('Register')
})

router.get('/', authController.isLoggedIn, logicController.getOrders, (req, res) => {
    if (req.user) {
        return res.status(200).render('Home', {
            user: req.user,
            data: req.orders
        })
    } else {
        return res.status(401).render('Register', {
            message: 'Usuario no registrado, favor registrarse'
        })
    }
})

router.get('/orders/new', authController.isLoggedIn, (req, res) => {
    if (req.user) {
        return res.status(200).render('Orders', {
            user: req.user
        })
    } else {
        return res.status(401).render('Register', {
            message: 'Usuario no registrado, favor registrarse'
        })
    }
})

router.post('/orders/new', authController.isLoggedIn, notEmpty, logicController.createOrder)
router.get('/update/:id', authController.isLoggedIn, logicController.getOrderById, (req, res) => {
    if (req.user) {
        return res.status(200).render('OrdersUpdate', {
            user: req.user,
            data: req.order
        })
    } else {
        return res.status(401).render('Register', {
            message: 'Usuario no registrado, favor registrarse'
        })
    }
})

router.post('/update/:id', authController.isLoggedIn, logicController.updateById)
router.get('/detail/:id', authController.isLoggedIn, logicController.getOrderById, (req, res) => {
    if (req.user) {
        return res.status(200).render('Detail', {
            user: req.user,
            data: req.order
        })
    } else {
        return res.status(401).render('Register', {
            message: 'Usuario no registrado, favor registrarse'
        })
    }
})

module.exports = router;