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
db.user = require('../models/user.model')(sequelize);
db.post = require('../models/post.model')(sequelize);

db.post.hasOne(db.user, {
  foreignKey: 'fk_userid',
  targetKey: 'user_id'
});


module.exports = db;