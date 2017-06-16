var mysql=require('mysql');

function connectServer(){
	var client=mysql.createConnection({
	 	host:'localhost',
	 	user:'root',
	 	password:'123456',
	 	database:'test2'
	})

	return client;
}
/*登录选择出密码*/
function  selectFun(client,username,callback){
	//client为一个mysql连接对象
	client.query('select password from users where username="'+username+'"',function(err,results,fields){
		if(err) throw err;
		callback(results);
	});
}
/*注册插入数据*/
function insertFun(client,username,password,callback){
	client.query('insert into users(username,password) value(?,?)', [username,password], function(err,result){
	if(err){
		console.log( "error:" + err.message);
		return err;
	}
	 	callback(err);
	});
}
/*选出所有clerk表中的数据*/
function  selectAll(callback){
	//client为一个mysql连接对象
	client.query('select * from clerk',function(err,results,fields){
		if(err) throw err;
		callback(results);
	});
}
/*选出所有clerk表中的数据*/
function  deleteline(id,callback){
	client.query('delete from clerk where id = "'+id+'"',function(err,results,fields){
		if(err) throw err;
		callback(results);
	});
}
/*根据id取出人员信息（clerk表）*/
function  selectMess(client,id,callback){
	//client为一个mysql连接对象
	client.query('select * from clerk where id="'+id+'"',function(err,results,fields){
		if(err) throw err;
		callback(results);
	});
}
/*修改clerk表中的数据*/
function editorMess(client,id,name,old,phone,callback){
	client.query('update clerk set name="'+name+'",old="'+old+'",phone="'+phone+'" where id="'+id+'"',function(err,results,fields){
		if(err) throw err;
		callback(err);
	})
}
exports.connect = connectServer;
exports.selectFun  = selectFun;
exports.insertFun = insertFun;
exports.selectAll = selectAll;
exports.deleteline = deleteline;
exports.selectMess = selectMess;
exports.editorMess = editorMess;