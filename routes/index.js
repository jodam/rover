var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.numViews = req.session.numViews + 1 || 1;
  res.render('index', { title: 'Express: '+req.session.numViews });
});

module.exports = router;
