const {DataTypes} = require('sequelize');
const sequelize = require('../store/connection');

const materials = sequelize.define('materials',{
    id:{
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    materials:{
        type:DataTypes.CHAR, allowNull: false
    },
    price:{
        type:DataTypes.CHAR, allowNull: false
    },
});

module.exports = materials;