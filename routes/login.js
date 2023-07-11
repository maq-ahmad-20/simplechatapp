
const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {

    res.send(`<form action="/homePage" method="POST" onSubmit="localStorage.setItem('username',document.getElementById('user').value)"><input type = "text" name="username" id="user">
    <button type="submit">Login</button></form>`);

})

router.post('/homePage', (req, res) => {
    res.redirect('/');
})




module.exports = router;










