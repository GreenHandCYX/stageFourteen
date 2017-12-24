const Sequelize = require('sequelize')
const sequelize = new Sequelize('qs', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql', // | 'sqlite' | 'postgres' | 'mssql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  // 仅限 SQLite
  // storage: 'path/to/database.sqlite'
})

module.exports = sequelize
