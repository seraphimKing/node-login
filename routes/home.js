
/*
 * GET home page.
 */

exports.homes = function(req, res){
	if(req.session.user != null){
		res.render('home', { name: req.session.user.username});
	}
	else{
		res.redirect('/login');
	}
};