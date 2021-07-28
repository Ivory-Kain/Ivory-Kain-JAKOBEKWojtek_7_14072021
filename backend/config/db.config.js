const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
 
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.user = require('../models/user.model')(sequelize, Sequelize);
// db.profile = require('../models/profile.model')(sequelize, Sequelize);

// db.profile.belongsTo(db.user, {foreignKey: 'fk_userid', targetKey: 'uuid'});
// db.user.hasOne(db.profile, {foreignKey: 'fk_userid', targetKey: 'uuid'});
 
 
module.exports = db;