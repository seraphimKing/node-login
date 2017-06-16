
/*
 * GET login page.
 */

exports.registers = function(req, res){
  res.render('register',{home: "注册"});
};