var express = require('express');
var router = express.Router();
const User = require(__dirname + "/../models/User.js");

// create a user

/* GET form page. */
router.get('/', function (req, res, next) {
    res.render('deleteform');
});

router.post('/', function (req, res, next) {
    User.deleteOne({ name: req.body.name })
        .then(User => {
            console.log('User deleted!')
            res.redirect('users');
        })
        .catch(err => { console.log('Could not delete this user', err) });
})


// POST form

module.exports = router;