var express = require('express');
var router = express.Router();
const User = require(__dirname + "/../models/User.js");

// create a user

/* GET form page. */
router.get('/', function (req, res, next) {
    res.render('form');
});

router.post('/', function (req, res, next) {
    User.create({ name: req.body.name, age: req.body.age, mood: req.body.mood })
        .then(User => {
            res.redirect('users');
            //res.render('form');
            console.log("New user successfully added!");
            //res.send("Thank you for submitting!")
        })
        .catch(err => { console.log('Could not add a new user', err) });
})


// POST form

module.exports = router;
