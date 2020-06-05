var config = require('./config/config')

var connectionURI = `mongodb://${config.dbConfig.user}:${config.dbConfig.password}@${config.dbConfig.host}:${config.dbConfig.port}/${config.dbConfig.database}?authSource=admin`;

module.exports = {
  database: connectionURI
}