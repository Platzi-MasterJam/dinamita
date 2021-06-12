const {DataTypes} = require('sequelize');
const sequelize = require('../store/connection');


const form = sequelize.define('services',{
    id:{
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    name:{
        type:DataTypes.CHAR, allowNull: false
    },
    email:{
        type:DataTypes.CHAR, allowNull: false
    },
    address:{
        type:DataTypes.CHAR, allowNull:false
    },
    description:{
        type:DataTypes.TEXT, allowNull:false
    },
    glass:{
        type:DataTypes.BOOLEAN 
    },
    iron:{
        type:DataTypes.BOOLEAN 
    },
    paper:{
        type:DataTypes.BOOLEAN 
    },
    plastic:{
        type:DataTypes.BOOLEAN 
    }
})

module.exports = form;