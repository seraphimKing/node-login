/*
 *	页面注册行为
 */
var user = require('../dao/dbConnect');

exports.useregister = function(req, res){
   client = user.connect();
    user.insertFun(client,req.body.username2,req.body.password2,function (err) {
    	if(err) throw err;
    	res.send('注册成功');
    })
};