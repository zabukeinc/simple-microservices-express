require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelizeInstance = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT,
});


module.exports = sequelizeInstance