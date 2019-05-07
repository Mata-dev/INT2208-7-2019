const express = require('express')
const router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
  multipleStatements: true,
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "cauthu_anh"
});
con.connect();
router.get('/mancity.html', function (req, res) {
  var sql = "SELECT * FROM mancity WHERE vitri = 'GK';SELECT * FROM mancity WHERE vitri = 'DF';SELECT * FROM mancity WHERE vitri = 'MF';SELECT * FROM mancity WHERE vitri = 'FW';SELECT * FROM clb_anh.mancity;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `mancity`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.mancity;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.mancity WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.mancity WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/mancity', {results});
  });
});

router.get('/arsenal.html', function (req, res) {
  var sql = "SELECT * FROM arsenal WHERE vitri = 'GK';SELECT * FROM arsenal WHERE vitri = 'DF';SELECT * FROM arsenal WHERE vitri = 'MF';SELECT * FROM arsenal WHERE vitri = 'FW';SELECT * FROM clb_anh.arsenal;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `arsenal`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.arsenal;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.arsenal WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.arsenal WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/arsenal', {results});
  });
});

router.get('/bournemouth.html', function (req, res) {
  var sql = "SELECT * FROM bournemouth WHERE vitri = 'GK';SELECT * FROM bournemouth WHERE vitri = 'DF';SELECT * FROM bournemouth WHERE vitri = 'MF';SELECT * FROM bournemouth WHERE vitri = 'FW';SELECT * FROM clb_anh.bournemouth;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `bournemouth`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.bournemouth;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.bournemouth WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.bournemouth WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/bournemouth', {results});
  });
});

router.get('/brighton.html', function (req, res) {
  var sql = "SELECT * FROM brighton WHERE vitri = 'GK';SELECT * FROM brighton WHERE vitri = 'DF';SELECT * FROM brighton WHERE vitri = 'MF';SELECT * FROM brighton WHERE vitri = 'FW';SELECT * FROM clb_anh.brighton;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `brighton`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.brighton;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.brighton WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.brighton WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/brighton', {results});
  });
});

router.get('/burnley.html', function (req, res) {
  var sql = "SELECT * FROM burnley WHERE vitri = 'GK';SELECT * FROM burnley WHERE vitri = 'DF';SELECT * FROM burnley WHERE vitri = 'MF';SELECT * FROM burnley WHERE vitri = 'FW';SELECT * FROM clb_anh.burnley;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `burnley`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.burnley;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.burnley WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.burnley WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/burnley', {results});
  });
});

router.get('/cardiff.html', function (req, res) {
  var sql = "SELECT * FROM cardiff WHERE vitri = 'GK';SELECT * FROM cardiff WHERE vitri = 'DF';SELECT * FROM cardiff WHERE vitri = 'MF';SELECT * FROM cardiff WHERE vitri = 'FW';SELECT * FROM clb_anh.cardiff;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `cardiff`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.cardiff;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.cardiff WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.cardiff WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/cardiff', {results});
  });
});

router.get('/chelsea.html', function (req, res) {
  var sql = "SELECT * FROM chelsea WHERE vitri = 'GK';SELECT * FROM chelsea WHERE vitri = 'DF';SELECT * FROM chelsea WHERE vitri = 'MF';SELECT * FROM chelsea WHERE vitri = 'FW';SELECT * FROM clb_anh.chelsea;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `chelsea`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.chelsea;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.chelsea WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.chelsea WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/chelsea', {results});
  });
});

router.get('/everton.html', function (req, res) {
  var sql = "SELECT * FROM everton WHERE vitri = 'GK';SELECT * FROM everton WHERE vitri = 'DF';SELECT * FROM everton WHERE vitri = 'MF';SELECT * FROM everton WHERE vitri = 'FW';SELECT * FROM clb_anh.everton;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `everton`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.everton;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.everton WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.everton WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/everton', {results});
  });
});

router.get('/fulham.html', function (req, res) {
  var sql = "SELECT * FROM fulham WHERE vitri = 'GK';SELECT * FROM fulham WHERE vitri = 'DF';SELECT * FROM fulham WHERE vitri = 'MF';SELECT * FROM fulham WHERE vitri = 'FW';SELECT * FROM clb_anh.fulham;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `fulham`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.fulham;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.fulham WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.fulham WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/fulham', {results});
  });
});

router.get('/huddersfield.html', function (req, res) {
  var sql = "SELECT * FROM huddersfields WHERE vitri = 'GK';SELECT * FROM huddersfields WHERE vitri = 'DF';SELECT * FROM huddersfields WHERE vitri = 'MF';SELECT * FROM huddersfields WHERE vitri = 'FW';SELECT * FROM clb_anh.huddersfields;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `huddersfields`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.huddersfields;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.huddersfields WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.huddersfields WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/huddersfield', {results});
  });
});

router.get('/leicester.html', function (req, res) {
  var sql = "SELECT * FROM leicester WHERE vitri = 'GK';SELECT * FROM leicester WHERE vitri = 'DF';SELECT * FROM leicester WHERE vitri = 'MF';SELECT * FROM leicester WHERE vitri = 'FW';SELECT * FROM clb_anh.leicester;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `leicester`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.leicester;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.leicester WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.leicester WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/leicester', {results});
  });
});

router.get('/liverpool.html', function (req, res) {
  var sql = "SELECT * FROM liverpool WHERE vitri = 'GK';SELECT * FROM liverpool WHERE vitri = 'DF';SELECT * FROM liverpool WHERE vitri = 'MF';SELECT * FROM liverpool WHERE vitri = 'FW';SELECT * FROM clb_anh.liverpool;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `liverpool`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.liverpool;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.liverpool WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.liverpool WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/liverpool', {results});
  });
});

router.get('/manutd.html', function (req, res) {
  var sql = "SELECT * FROM manutd WHERE vitri = 'GK';SELECT * FROM manutd WHERE vitri = 'DF';SELECT * FROM manutd WHERE vitri = 'MF';SELECT * FROM manutd WHERE vitri = 'FW';SELECT * FROM clb_anh.manutd;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `manutd`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.manutd;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.manutd WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.manutd WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/manutd', {results});
  });
});

router.get('/newcastle.html', function (req, res) {
  var sql = "SELECT * FROM newcastle WHERE vitri = 'GK';SELECT * FROM newcastle WHERE vitri = 'DF';SELECT * FROM newcastle WHERE vitri = 'MF';SELECT * FROM newcastle WHERE vitri = 'FW';SELECT * FROM clb_anh.newcastle;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `newcastle`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.newcastle;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.newcastle WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.newcastle WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/newcastle', {results});
  });
});

router.get('/palace.html', function (req, res) {
  var sql = "SELECT * FROM palace WHERE vitri = 'GK';SELECT * FROM palace WHERE vitri = 'DF';SELECT * FROM palace WHERE vitri = 'MF';SELECT * FROM palace WHERE vitri = 'FW';SELECT * FROM clb_anh.palace;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `palace`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.palace;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.palace WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.palace WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/palace', {results});
  });
});

router.get('/southampton.html', function (req, res) {
  var sql = "SELECT * FROM southampton WHERE vitri = 'GK';SELECT * FROM southampton WHERE vitri = 'DF';SELECT * FROM southampton WHERE vitri = 'MF';SELECT * FROM southampton WHERE vitri = 'FW';SELECT * FROM clb_anh.southampton;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `southampton`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.southampton;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.southampton WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.southampton WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/southampton', {results});
  });
});

router.get('/tottenham.html', function (req, res) {
  var sql = "SELECT * FROM tottenham WHERE vitri = 'GK';SELECT * FROM tottenham WHERE vitri = 'DF';SELECT * FROM tottenham WHERE vitri = 'MF';SELECT * FROM tottenham WHERE vitri = 'FW';SELECT * FROM clb_anh.tottenham;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `tottenham`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.tottenham;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.tottenham WHERE `san`= 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.tottenham WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/tottenham', {results});
  });
});

router.get('/watford.html', function (req, res) {
  var sql = "SELECT * FROM watford WHERE vitri = 'GK';SELECT * FROM watford WHERE vitri = 'DF';SELECT * FROM watford WHERE vitri = 'MF';SELECT * FROM watford WHERE vitri = 'FW';SELECT * FROM clb_anh.watford;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `watford`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.watford;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.watford WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.watford WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/watford', {results});
  });
});

router.get('/westham.html', function (req, res) {
  var sql = "SELECT * FROM westham WHERE vitri = 'GK';SELECT * FROM westham WHERE vitri = 'DF';SELECT * FROM westham WHERE vitri = 'MF';SELECT * FROM westham WHERE vitri = 'FW';SELECT * FROM clb_anh.westham;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `westham`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.westham;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.westham WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.westham WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/westham', {results});
  });
});

router.get('/wolves.html', function (req, res) {
  var sql = "SELECT * FROM wolves WHERE vitri = 'GK';SELECT * FROM wolves WHERE vitri = 'DF';SELECT * FROM wolves WHERE vitri = 'MF';SELECT * FROM wolves WHERE vitri = 'FW';SELECT * FROM clb_anh.wolves;SELECT SUM(`thedo`) td, SUM(`thevang`)tv FROM `wolves`;SELECT SUM(`banthang`) bt , SUM(`banbai`) bb FROM clb_anh.wolves;SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.wolves WHERE `san` = 'H';SELECT SUM(IF(`banthang`>`banbai`,1,0)) w,SUM(IF(`banthang`=`banbai`,1,0)) d,SUM(IF(`banthang`<`banbai`,1,0)) l FROM clb_anh.wolves WHERE `san` = 'A'";
  con.query(sql,[1,9], function(err, results) {
    if (err) throw err;
    res.render('CLB/Anh/wolves', {results});
  });
});

module.exports = router;
