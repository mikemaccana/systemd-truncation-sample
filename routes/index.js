var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Just fail with a bad method
  global.fakeMethod()
  // res.render('index', { title: 'Express' });
});

module.exports = router;
