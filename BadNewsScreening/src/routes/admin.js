const express = require('express');
const passport = require('passport');
const { Passport } = require('passport');
const router = express.Router();

const conn = require('../database');


router.get('/index', (req,res) => { 
    res.render('login.ejs');
});


// MANEJO DE SESIONES
router.get('/index', (req,res) =>{
    res.render('login.ejs');
});

router.post('/login',passport.authenticate('local',{
    successRedirect: "/correcto",
    failureRedirect: "/login"
}));

router.get('/correcto', (req,res,next)=>{
    if(req.isAuthenticated()) return next();
    
    res.redirect('/login');
},(req,res) =>{
    res.render('admin.ejs');
});

module.exports = router;