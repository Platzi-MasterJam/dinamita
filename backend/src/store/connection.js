const {Sequelize} = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE} = process.env;
const sequelize = new Sequelize(
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    {
        host:DB_HOST,
        dialect:'postgres',
        logging:false,
    })
async function connect(){
    try{
        sequelize.authenticate();
        console.log("Connected to the DB successfully")
    }catch(error){
        console.error("Unexpected error, please try again");
    }
};
connect()
module.exports = sequelize;