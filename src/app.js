const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');

const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');

const authentication = require('./authentication');

const mongoose = require('./mongoose');

const app = feathers();

// Load app configuration
app.configure(configuration());
// Enable CORS, security, compression, favicon and body parsing
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', feathers.static(app.get('public')));

// Set up Plugins and providers
app.configure(hooks());
app.configure(mongoose);
app.configure(rest());
app.configure(socketio());

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);
// Configure a middleware for 404s and the error handler
app.use(notFound());
app.use(handler());

app.hooks(appHooks);

// app.service('authentication').create({
// 	username: 'test2',
// 	password: 'test2',
//     fullname: 'test2',
//     email: 'test2@emal.com',
// })
// .then((data) => {
// 	console.log('token ', data)

// 	// app.service('users').remove('5a7bdfb726098853ae3beb93')
// 	// .then((data) => {
// 	// 	console.log()
// 	// })

// 	app.service('users').create({
// 		username: 'test2',
// 		password: 'test2',
// 	    fullname: 'test2',
// 	    email: 'test2@emal.com',
// 	})
// 	.then((data) => {
// 		console.log('data ', data)
// 	})
// })
// .catch((error) => {
// 	console.log('error ', error)
// })

// app.authentication({
// 	strategy: 'local',
// 	'username': 'test1',
// 	'password': 'test1',
// })
// .then((data) => {
// 	console.log('data ', data)
// })

module.exports = app;
