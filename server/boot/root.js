'use strict';

var env = {
  production: process.env.NODE_ENV === 'production'
};

module.exports = function(server) {

  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  // router.get('/', server.loopback.status());
  router.get('/', function(req, res) {
  	var locals = {
  	  title: 'Page Title',
  	  description: 'Page Description',
  	  header: 'Page Header',
      env: env,
  	};
  	console.log('[root]', 'Fetching /');
    res.render('index', locals);
  });

  server.use(router);
};
