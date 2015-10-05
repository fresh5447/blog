var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/blogs', function(req, res) {
  res.render('blogs', { title: 'all blogs son!' });
});

module.exports = router;
