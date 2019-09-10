var express = require('express');
var router = express.Router();
const User = require(__dirname + "/../models/User.js");

// create a user

/* GET form page. */
router.get('/', function (req, res, next) {
    res.render('updateform');
});

router.post('/', function (req, res, next) {
    User.updateOne({ name: req.body.name }, { mood: req.body.mood })
        .then(User => {
            console.log('User mood has been updated!')
            res.redirect('users');
        })
        .catch(err => { console.log('Could not update this user', err) });
})


// POST form

module.exports = router;