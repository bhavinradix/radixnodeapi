express = module.exports = require('express');
bodyParser      = module.exports = require('body-parser');
expressValidator= module.exports = require('express-validator');
fileUpload      = module.exports = require('express-fileupload');
jwt             = module.exports = require('jsonwebtoken');
fs              = module.exports = require('fs');
let route      = require('./routes'); //path to the routes.js
connection      = require('./config/database') //path to the config/database.js

var port = process.env.PORT || 8080;

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressValidator());

app.use('/v1.0',route); //Set prefix in route v1.0; redirect the routes to the routes.js file;

// user routes
app.use('/v1.0/user',userRoutes);

//create app listner
app.listen(port, console.log('Application is running at ' + port));

//export the instance of express
module.exports = app;