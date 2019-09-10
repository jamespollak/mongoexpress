var express = require('express');
var router = express.Router();

// require user model
const User = require(__dirname + '/../models/User.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find().then(allUsers => {
    res.render("users.hbs", { allUsers: allUsers });
  })

});

module.exports = router;
