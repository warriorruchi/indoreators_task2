const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE,process.env.DATABASE_USERNAME,
   process.env.DATABASE_PASSWORD,
   {
    dialect:process.env.DATABASE_DIALECT,
    host:process.env.DATABASE.HOST
})
module.exports =sequelize;