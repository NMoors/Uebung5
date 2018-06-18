var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.post('/hallo', function(req,res,next){
  var birthday = new Date (1993, 12, 17, 6,0,0,0);
  var jetzt = Date.now();
  var dmsec = jetzt - birthday;
  var ddays = (dmsec/1000)/3600/24;
  var dweeks = ddays/7;
  res.render('index', { title: 'Nauka',
                        name: 'Meine Daten',
                        birthday: Math.round((dmsec)/1000),
                        days: Math.round(ddays),
                        weeks:Math.round(dweeks)
                      });
});

module.exports = router;
