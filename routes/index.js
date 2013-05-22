var resource = require('./resource'); /*
 * GET home page.
 */
 
function index(req, res){
  res.render('index', { title: 'demo' });
};

/**
 * Set up routes
 */
 
module.exports = function(app, options) {
  app.get('/', index);
  
  
  resource.setup(app, options);
  
}
