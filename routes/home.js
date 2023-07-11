const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const localStorage = require('store2');

router.use(bodyparser.urlencoded({ extended: false }));

const fs = require('fs');

router.get('/', (req, res, next) => {

    fs.readFile('message.txt', (err, data) => {
        if (err) {
            data = 'No chat Exists';
        }
        res.send(`${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
        <input type = "text" name="message" id="message">
        <input type = "hidden" name ="username" id = "username"><br>
        <button type="submit">SendMessage</button></form>`);
    })





})

router.post('/', (req, res, next) => {

    console.log(req.body)

    fs.writeFile('message.txt', `${req.body.username} : ${req.body.message}`, { flag: 'a' }, (err) => {
        err ? console.log(err) : res.redirect('/');
    })




})


module.exports = router;