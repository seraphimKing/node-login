/*
 *	表格编辑行为
 */
var user = require('../dao/dbConnect');

exports.deleteline = function(req, res){
    client = user.connect();
    var id = req.query.id;
    user.deleteline(id,function (err,result) {
    	//if(err) throw err;这句话加入就报错，有机会搞好
    	user.selectAll(function(result){
			res.render('home',{items: result});
		})
    })

};

/*跳转到修改页面，并把数据传到新界面*/
exports.editorline = function(req,res){
	client = user.connect();
    var id = req.query.id;
    user.selectMess(client,id,function(results){
    	console.log(results[0].name);
    	res.render('editorClerk',{items: results});
    })
}
/*获取页面传递过来的数据并更新数据库中的值*/
exports.editorclerk = function(req,res){
	client = user.connect();
	var id = req.query.id;
	user.editorMess(client,id,req.body.name,req.body.old,req.body.phone,function(err){
		if(err) throw err;
    	user.selectAll(function(result){
  			res.render('home',{items: result});
  		})
  		
	})

}
