var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.post('/', function(req, res, next) {
  const {user, html, css} = req.body;
  fs.writeFileSync("./" + user + "/index.html", html, "utf-8");
  fs.writeFileSync("./" + user + "/style.css", css, "utf-8");


  res.send('Submmited for ' + user);
});

module.exports = router;
