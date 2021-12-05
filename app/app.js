const express = require('express');
const bodyParser = require('body-parser');
const path =require('path');
 
const App = express();
const Mascotas = require('./routes/mascotaRoutes');
const routes = require('./routes/routes');


App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));
;
App.use(express.static(__dirname + '/public'));
App.set('views',path.join(__dirname, 'views'));
App.set('view engine','html')

App.use('/mascota',Mascotas);
App.use('/',routes);


var engine = require('consolidate');

App.set('views', __dirname + '/views');
App.engine('html', engine.mustache);
App.set('view engine', 'html');


module.exports = App;