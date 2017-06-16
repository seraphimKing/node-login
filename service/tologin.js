/*
 *	页面登录行为
 */
var user = require('../dao/dbConnect');

exports.userlogin = function(req, res){
  client = user.connect();
  result=null;
  if(req.session.user == null)
  	user.selectFun(client,req.body.username, function (results) {
	  	if(results[0].password==req.body.password){
	  		req.session.user = ({username:req.body.username,password:req.body.password});
	  		user.selectAll(function(result){
	  			res.render('home',{items: result});
	  		})
	  	}
	  	
	  	else{
	  		res.send('登录失败');
	  	}
  	})
  	else{
  		user.selectAll(function(result){
  			res.render('home',{items: result});
  		})
  	}
};
exports.logout = function(req,res){
	req.session.destroy();
	res.redirect('/login');
};