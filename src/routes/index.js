var express = require('express');
var router = express.Router();
var api = require('./api');
var auth = require('./auth');

router.use('/api', api);
router.use('/auth', auth);

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express', csrfToken: req.csrfToken() });
});

module.exports = router;
