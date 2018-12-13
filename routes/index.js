var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LEDテスト,arduino' });
});

// swページへjsonを送る処理
router.get('/sw', function(req, res, next){
  res.json({
    // ラズパイ時
    // sw: sw

    // Arduino時
    sw: sw_status.sw
  });
});

// ledページへledの状態を入れる処理
router.get('/led', function(req, res, next){
  res.send(global_val);
});

module.exports = router;
