const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: (process.env.CLIENT_URL || 'http://localhost:3000') + '/login'
    }),
    (req, res) => {
        // Successful authentication, redirect home.
        const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
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
