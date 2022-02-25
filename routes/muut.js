var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function (req, res, next) {
    res.render('muut', { title: 'Etsimaääsi sivua ei löydy ei....' });
});

module.exports = router;
