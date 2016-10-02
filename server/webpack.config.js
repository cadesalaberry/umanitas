var production = process.env.NODE_ENV === 'production';

module.exports = production
? require('./webpack.config.production.js')
: require('./webpack.config.base.js');
