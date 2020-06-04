var env = require("./env.json");

module.exports.dbConfig = {
    host: env.db.host,
    port: env.db.port,
    user: env.db.username,
    password: env.db.password,
    database: env.db.database
}