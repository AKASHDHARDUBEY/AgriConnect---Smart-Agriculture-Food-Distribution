const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: (process.env.CLIENT_URL || 'https://agri-connect-smart-agriculture-food.vercel.app') + '/login'
    }),
    (req, res) => {
        // Successful authentication, redirect home.
        const clientUrl = process.env.CLIENT_URL || 'https://agri-connect-smart-agriculture-food.vercel.app';
        console.log('Redirecting to:', clientUrl); // Debug log
        res.redirect(clientUrl);
    }
);

router.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

router.get('/current_user', (req, res) => {
    res.send(req.user);
});

module.exports = router;
