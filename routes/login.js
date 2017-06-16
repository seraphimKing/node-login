
/*
 * GET login page.
 */

exports.logins = function(req, res){
  res.render('login',{home: "登录"});
};