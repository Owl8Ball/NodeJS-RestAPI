const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./User/user.model.js")(sequelize, Sequelize);
db.characters = require("./Character/character.model.js")(sequelize, Sequelize);

db.users.hasMany(db.characters, { as: "characters" });
db.characters.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user",
});

module.exports = db;