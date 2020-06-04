const config = require('./config/config')

var connectionURI = 'mongodb://' + config.dbConfig.user + ':' + config.dbConfig.password + '@' + config.dbConfig.host + ':' + config.dbConfig.port + '/' + config.dbConfig.database

module.exports = {
  database: connectionURI
}