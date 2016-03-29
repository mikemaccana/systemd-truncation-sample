var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Just fail with a bad method
  setTimeout(function(){
  	global.fakeMethod();
  },3 * 1000)
  res.render('index', { title: 'Express' });
});

module.exports = router;
