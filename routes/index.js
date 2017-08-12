var express = require('express');
var router = express.Router();

var fs = require('fs');

router.post('/contact', function(req, res, next) {
  fs.appendFile("contact.log", JSON.stringify(req.body), function(err) {
  	console.log(err);
  });
  res.send("Success");
});

module.exports = router;
