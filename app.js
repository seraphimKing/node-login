
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var login = require('./routes/login');
var home = require('./routes/home');
var register = require('./routes/register');
var tologin = require('./service/tologin');
var toeditor = require('./service/editortable');
var toregister= require('./service/toregister');
var http = require('http');
var path = require('path');

var app = express();
var cookieParser = require('cookie-parser');
//session
var session = require('express-session');

//session
app.use(session({
	secret:"12345awqd",
	cookie:{maxAge:60000},
	resave:false,
	saveUninitialized:true
}))
app.use(cookieParser());

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/login', login.logins);
app.get('/logout',tologin.logout)
app.get('/home', home.homes);
app.get('/register',register.registers);
app.post('/userlogin',tologin.userlogin);
app.post('/useregister',toregister.useregister);
app.get('/deleteline',toeditor.deleteline);
app.get('/editorline',toeditor.editorline);
app.post('/clerkeditor',toeditor.editorclerk);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
