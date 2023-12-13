const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const Note = sequelize.define('note',{
     id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    message:{
        type: DataTypes.STRING,
        allowNull:false,

    }
})

module.exports = Note;